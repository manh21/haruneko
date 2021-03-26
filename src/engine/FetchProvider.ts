import { Blacklist } from './Blacklist';
import { i18n } from './i18n/Localization';
import { HeadersView } from './transformers/HeadersView';

const fetchApiSupportedPrefix = 'X-FetchAPI-';
const fetchApiUnsupportedHeaders = [
    'User-Agent',
    'Referer',
    'Origin',
    'Host'
];

// NOTE: parameter extraInfoSpec:
//       'blocking'       => sync request required for header modification
//       'requestHeaders' => allow change request headers?
//       'extraHeaders'   => allow change 'referer', 'origin', 'cookie'
chrome.webRequest.onBeforeSendHeaders.addListener(BlockRequests, { urls: Blacklist }, [ 'blocking' ]);
chrome.webRequest.onBeforeSendHeaders.addListener(ModifyFetchHeaders, { urls: [ '<all_urls>' /*window.location.origin*/ ] }, [ 'blocking', 'requestHeaders', 'extraHeaders' ]);

function BlockRequests() {
    return {
        cancel: true
    };
}

function ModifyFetchHeaders(details: chrome.webRequest.WebRequestHeadersDetails): chrome.webRequest.BlockingResponse {
    // TODO: set cookies from chrome matching the details.url?
    //const cookies: chrome.cookies.Cookie[] = await new Promise(resolve => chrome.cookies.getAll({ url: details.url }, resolve));
    const headers = new HeadersView(details.requestHeaders || []);
    headers.set('Referer', details.url);
    FetchRequest.RevealFetchAPIHeaders(headers);

    return {
        requestHeaders: details.requestHeaders // headers.Values
    };
}

/*
const antiScrapingDetectionScript = `
    new Promise(async (resolve, reject) => {

        function handleError(message) {
            reject(new Error(message));
        }

        function handleNoRedirect() {
            resolve('none');
        }

        function handleAutomaticRedirect() {
            resolve('automatic');
        }

        function handleUserInteractionRequired() {
            resolve('interactive');
        }

        // Common Checks
        if(document.querySelector('meta[http-equiv="refresh"][content*="="]')) {
            return handleAutomaticRedirect();
        }

        // CloudFlare Checks
        let cfCode = document.querySelector('.cf-error-code');
        if(cfCode) {
            return handleError('CloudFlare Error ' + cfCode.innerText);
        }
        if(document.querySelector('form#challenge-form[action*="_jschl_"]')) { // __cf_chl_jschl_tk__
            return handleAutomaticRedirect();
        }
        if(document.querySelector('form#challenge-form[action*="_captcha_"]')) { // __cf_chl_captcha_tk__
            return handleUserInteractionRequired();
        }

        // DDoS Guard Checks
        if(document.querySelector('div#link-ddg a[href*="ddos-guard"]')) { // Sample => https://manga-tr.com
            return handleAutomaticRedirect();
        }

        // 9anime WAF re-captcha
        if(window.location.hostname.includes('9anime')) {
            await new Promise(resolve => setTimeout(resolve, 5000));
            if(document.querySelector('div#episodes form[action*="waf-verify"]')) {
                return handleUserInteractionRequired();
            }
        }

        // Default
        handleNoRedirect();
    });
`;
*/

enum FetchRedirection {
    None,
    Automatic,
    Interactive
}

async function checkAntiScrapingDetection(document: Document): Promise<FetchRedirection> {
    // Common Checks
    if(document.querySelector('meta[http-equiv="refresh"][content*="="]')) {
        return FetchRedirection.Automatic;
    }

    // CloudFlare Checks
    const cfCode = document.querySelector('.cf-error-code');
    if(cfCode) {
        throw new Error('CloudFlare Error ' + cfCode.textContent?.trim());
    }
    if(document.querySelector('form#challenge-form[action*="_jschl_"]')) { // __cf_chl_jschl_tk__
        return FetchRedirection.Automatic;
    }
    if(document.querySelector('form#challenge-form[action*="_captcha_"]')) { // __cf_chl_captcha_tk__
        return FetchRedirection.Interactive;
    }

    // DDoS Guard Checks
    if(document.querySelector('div#link-ddg a[href*="ddos-guard"]')) { // Sample => https://manga-tr.com
        return FetchRedirection.Automatic;
    }

    // 9anime WAF re-captcha
    if(window.location.hostname.includes('9anime')) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        if(document.querySelector('div#episodes form[action*="waf-verify"]')) {
            return FetchRedirection.Interactive;
        }
    }

    return FetchRedirection.None;
}

export class FetchRequest extends Request {

    public constructor(input: RequestInfo, init?: RequestInit) {
        // Fetch API defaults => https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        if(init && init.headers) {
            const headers = new Headers(init.headers);
            FetchRequest.ConcealFetchAPIHeaders(headers);
            init.headers = headers;
        }
        super(input, init);
    }

    public static ConcealFetchAPIHeaders(headers: Headers): void {
        for(const header of fetchApiUnsupportedHeaders) {
            const prefixed = fetchApiSupportedPrefix + header;
            const value = headers.get(header);
            if(value !== null) {
                headers.set(prefixed, value);
                headers.delete(header);
            }
        }
    }

    public static RevealFetchAPIHeaders(headers: HeadersView): void {
        for(const header of fetchApiUnsupportedHeaders) {
            const prefixed = fetchApiSupportedPrefix + header;
            const value = headers.get(prefixed);
            if(value !== null) {
                headers.set(header, value);
                headers.delete(prefixed);
            }
        }
    }
}

export async function Fetch(request: FetchRequest): Promise<Response> {
    return fetch(request);
}

export async function FetchHTML(request: FetchRequest): Promise<Document> {
    const response = await Fetch(request);
    const content = await response.text();
    const mime = 'text/html'; // response.headers.get('content-type')
    return new DOMParser().parseFromString(content, mime);
}

export async function FetchJSON<TResult>(request: FetchRequest): Promise<TResult> {
    const response = await Fetch(request);
    return response.json();
}

export async function FetchCSS<T extends HTMLElement>(request: FetchRequest, query: string): Promise<T[]> {
    const dom = await FetchHTML(request);
    return [...dom.querySelectorAll(query)] as T[];
}

/*
public async FetchXPATH(request: FetchRequest, xpath: string): Promise<Node[]> {
    const dom = await this.FetchHTML(request);
    const result = document.evaluate(xpath, dom, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    return new Array(result.snapshotLength).fill(null).map((_, index) => result.snapshotItem(index) as Node);
}
*/

async function FetchWindow(request: FetchRequest, timeout: number): Promise<any> {

    const options = {
        new_instance: false,
        mixed_context: false,
        show: true,
        position: 'center',
        width: 1280,
        height: 720,
        //inject_js_start: 'filename'
        //inject_js_end: 'filename'
    };

    const win: any = await new Promise(resolve => nw.Window.open(request.url, options, (win: any) => resolve(win)));

    return new Promise((resolve, reject) => {

        const destroy = () => {
            win.close();
            reject(new Error(i18n('RequestProvider.FetchWindow.TimeoutError')));
        };
        let cancellation = setTimeout(destroy, timeout || 30_000);

        win.on('loaded', async () => {
            console.log('LOADED');
            // TODO: wait until all redirects are done and page does not contain CLoudFlare script ...
            const redirect = await checkAntiScrapingDetection(win.window.document); // await win.eval(null, antiScrapingDetectionScript);
            switch (redirect) {
                case FetchRedirection.Interactive:
                    // NOTE: Allow the user to solve the captcha within 2 minutes before rejcting the request with an error
                    clearTimeout(cancellation);
                    cancellation = setTimeout(destroy, 120_000);
                    win.eval(null, `alert('Please solve the Captcha and then wait for the application to continue!');`);
                    win.show();
                    break;
                case FetchRedirection.Automatic:
                    console.log('> Redirect:', redirect, 'Wait for automatic redirect calling next loaded event...');
                    break;
                default:
                    clearTimeout(cancellation);
                    resolve(win);
                    break;
            }
        });
    });
}

export async function FetchWindowCSS<T extends HTMLElement>(request: FetchRequest, query: string, timeout: number): Promise<T[]> {
    const win = await FetchWindow(request, timeout);
    try {
        const dom = win.window.document as Document;
        return [...dom.querySelectorAll(query)] as T[];
    } finally{
        win.close();
    }
}

export async function FetchWindowScript<T>(request: FetchRequest, script: string, timeout: number): Promise<T> {
    const win = await FetchWindow(request, timeout);
    try {
        return win.eval(null, script) as T;
    } finally{
        win.close();
    }
}

//window['FetchWindowCSS'] = FetchWindowCSS;
//window['FetchWindowScript'] = FetchWindowScript;