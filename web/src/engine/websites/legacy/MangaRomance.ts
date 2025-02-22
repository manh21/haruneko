// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './MangaRomance.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('mangaromance', `Manga Romance`, 'https://www.mangaromance.eu' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class MangaRomance extends SoraOne {

    constructor() {
        super();
        super.id = 'mangaromance';
        super.label = 'Manga Romance';
        this.tags = [ 'webtoon', 'english' ];
        this.url = 'https://www.mangaromance.eu';
    }
}
*/