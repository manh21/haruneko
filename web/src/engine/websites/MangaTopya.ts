// Auto-Generated export from HakuNeko Legacy
//import { Tags } from '../Tags';
import icon from './MangaTopya.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import * as Common from './decorators/Common';

@Madara.MangaCSS(/^https?:\/\/mangatopya\.com\/manga\/[^/]+\/$/)
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv1()
@Madara.PagesSinglePageCSS()
@Common.ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('mangatopya', 'MangaTopya', 'https://mangatopya.com'/*, Tags.Media., Tags.Language.*/);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class MangaTopya extends WordPressMadara {

    constructor() {
        super();
        super.id = 'mangatopya';
        super.label = 'MangaTopya';
        this.tags = [ 'webtoon', 'turkish' ];
        this.url = 'https://mangatopya.com';
    }
}
*/