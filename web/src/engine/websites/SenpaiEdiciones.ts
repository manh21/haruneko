// Auto-Generated export from HakuNeko Legacy
import { Tags } from '../Tags';
import icon from './SenpaiEdiciones.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as MangaStream from './decorators/WordPressMangaStream';
import * as Common from './decorators/Common';

@MangaStream.MangaCSS(/^https?:\/\/senpaiediciones\.com\/manga\/[^/]+\/$/)
@MangaStream.MangasSinglePageCSS()
@MangaStream.ChaptersSinglePageCSS()
@MangaStream.PagesSinglePageCSS()
@Common.ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('senpaiediciones', 'Senpai Ediciones', 'https://senpaiediciones.com', Tags.Media.Manhwa, Tags.Media.Manhua, Tags.Language.Spanish);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class SenpaiEdiciones extends WordPressMangastream {

    constructor() {
        super();
        super.id = 'senpaiediciones';
        super.label = 'Senpai Ediciones';
        this.tags = [ 'webtoon', 'spanish' ];
        this.url = 'https://senpaiediciones.com';
        this.path = '/manga/list-mode/';
    }
}
*/