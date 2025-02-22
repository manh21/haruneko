// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './OneShotScans.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('oneshotscans', `One Shot Scans`, 'https://oneshotscans.com' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class OneShotScans extends Genkan {

    /**
     *
     *
    constructor() {
        super();
        super.id = 'oneshotscans';
        super.label = 'One Shot Scans';
        this.tags = [ 'webtoon', 'english', 'high-quality', 'scanlation' ];
        this.url = 'https://oneshotscans.com';
    }
}
*/