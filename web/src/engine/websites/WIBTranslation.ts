// Auto-Generated export from HakuNeko Legacy
import { Tags } from '../Tags';
import icon from './WIBTranslation.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as MangaStream from './decorators/WordPressMangaStream';
import * as Common from './decorators/Common';

@MangaStream.MangaCSS(/^https?:\/\/www\.wib\.my\.id\/manga\/[^/]+\/$/)
@MangaStream.MangasSinglePageCSS('div#content div.soralist ul li a.series', '/list/')
@MangaStream.ChaptersSinglePageCSS()
@MangaStream.PagesSinglePageCSS([], 'div#readerarea img, div#readarea img')
@Common.ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('wibtranslation', 'WIB Translation', 'https://www.wib.my.id', Tags.Media.Manga, Tags.Media.Manhwa, Tags.Media.Manhua, Tags.Language.Indonesian);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class WIBTranslation extends WordPressMangastream {

    constructor() {
        super();
        super.id = 'wibtranslation';
        super.label = 'WIB Translation';
        this.tags = [ 'manga', 'webtoon', 'indonesian' ];
        this.url = 'https://www.wib.my.id';

        this.queryPages = 'div#readerarea img, div#readarea img';
    }

    async _getMangas() {
        const uri = new URL('/feeds/posts/default/-/Series?alt=json&max-results=500', this.url);
        const request = new Request(uri, this.requestOptions);
        const data = await this.fetchJSON(request);
        return data.feed.entry.map(entry => {
            return {
                id: entry.content['$t'].match(/\/feeds\/posts\/default\/-\/[^?]+/).shift(),
                title: entry.title['$t'].trim()
            };
        });
    }

    async _getChapters(manga) {
        const uri = new URL(manga.id + '?alt=json&max-results=999', this.url);
        const request = new Request(uri, this.requestOptions);
        const data = await this.fetchJSON(request);
        return data.feed.entry.map(entry => {
            entry = entry.link.filter(link => link.rel === 'alternate').shift();
            return {
                id: this.getRootRelativeOrAbsoluteLink(entry.href, this.url),
                title: entry.title
            };
        });
    }
}
*/