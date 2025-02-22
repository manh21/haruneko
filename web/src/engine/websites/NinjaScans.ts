// Auto-Generated export from HakuNeko Legacy
//import { Tags } from '../Tags';
import icon from './NinjaScans.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import * as Common from './decorators/Common';

@Madara.MangaCSS(/^https?:\/\/ninjascans\.com\/manga\/[^/]+\/$/)
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv1()
@Madara.PagesSinglePageCSS()
@Common.ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('ninjascans', 'NinjaScans', 'https://ninjascans.com'/*, Tags.Media., Tags.Language.*/);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class NinjaScans extends WordPressMadara {

    constructor() {
        super();
        super.id = 'ninjascans';
        super.label = 'NinjaScans';
        this.tags = [ 'manga', 'high-quality', 'english', 'scanlation' ];
        this.url = 'https://ninjascans.com';
    }
}
*/