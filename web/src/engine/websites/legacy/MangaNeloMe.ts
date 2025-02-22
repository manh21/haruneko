// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './MangaNeloMe.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('manganelome', `MangaNeloMe`, 'http://manganelo.me' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class MangaNeloMe extends WordPressZbulu {

    constructor() {
        super();
        super.id = 'manganelome';
        super.label = 'MangaNeloMe';
        this.tags = [ 'manga', 'webtoon', 'english' ];
        this.url = 'http://manganelo.me';
        this.path = '/popular-manga';
        this.pathMangas = '?page=%PAGE%';
        this.pathChapters = '';

        this.queryMangasPageCount = 'div.pagination-container ul.pagination li:nth-last-of-type(2) a';
        this.queryChapters = 'div#chapterList div.chapters-wrapper div.r1 a.chap';
    }

    // Exactly same "protection" as in AnyACG template
    async _getPages(chapter) {
        let uri = new URL(chapter.id, this.url);
        let request = new Request(uri, this.requestOptions);
        let data = await this.fetchDOM(request, 'div.container-chap p#arraydata');
        return data[0].textContent.split(',').map(link => this.getAbsolutePath(link.trim(), request.url));
    }
}
*/