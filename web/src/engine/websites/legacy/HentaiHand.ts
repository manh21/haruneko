// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './HentaiHand.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('hentaihand', `HentaiHand`, 'https://hentaihand.com' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class HentaiHand extends Connector {

    constructor() {
        super();
        super.id = 'hentaihand';
        super.label = 'HentaiHand';
        this.tags = [ 'hentai', 'multi-lingual' ];
        this.url = 'https://hentaihand.com';
    }

    async _getMangaFromURI(uri) {
        let request = new Request(uri, this.requestOptions);
        let data = await this.fetchDOM(request, 'div#info-block div#info h1');
        let id = uri.pathname + uri.search;
        let title = data[0].innerText.trim();
        return new Manga(this, id, title);
    }

    async _getMangaList(callback) {
        try {
            throw new Error('This website does not provide a manga list, please copy and paste the URL containing the images directly from your browser into HakuNeko.');
        } catch(error) {
            console.error(error, this);
            callback(error, undefined);
        }
    }

    async _getChapterList(manga, callback) {
        try {
            callback(null, [ Object.assign({ language: '' }, manga) ]);
        } catch(error) {
            console.error( error, manga );
            callback( error, undefined );
        }
    }

    async _getPageList(manga, chapter, callback) {
        try {
            let request = new Request(this.url + chapter.id, this.requestOptions);
            let data = await this.fetchDOM(request, 'div#thumbnail-container a.gallerythumb source');
            let pageList = data.map(element => {
                let path = element.dataset['src'].split('/');
                let file = path.pop();
                path.push('full', file.replace('t.', '.'));
                return path.join('/');
            });
            callback(null, pageList);
        } catch(error) {
            console.error( error, chapter );
            callback( error, undefined );
        }
    }
}
*/