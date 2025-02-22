// Auto-Generated export from HakuNeko Legacy
import { Tags } from '../Tags';
import icon from './Tempestfansub.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as MangaStream from './decorators/WordPressMangaStream';
import * as Common from './decorators/Common';

@MangaStream.MangaCSS(/^https?:\/\/manga\.tempestfansub\.com\/manga\/[^/]+\/$/)
@MangaStream.MangasSinglePageCSS()
@MangaStream.ChaptersSinglePageCSS()
@MangaStream.PagesSinglePageCSS()
@Common.ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('tempestfansub', 'Tempestfansub', 'https://manga.tempestfansub.com', Tags.Media.Manga, Tags.Media.Manhwa, Tags.Media.Manhua, Tags.Language.Turkish);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class Tempestfansub extends WordPressMangastream {

    constructor() {
        super();
        super.id = 'tempestfansub';
        super.label = 'Tempestfansub';
        this.tags = [ 'webtoon', 'manga', 'turkish' ];
        this.url = 'https://manga.tempestfansub.com';

        this.path = '/manga/list-mode/';
    }
}
*/