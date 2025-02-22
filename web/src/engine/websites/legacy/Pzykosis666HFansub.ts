// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './Pzykosis666HFansub.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('pzykosis666hfansub', `Pzykosis666HFansub`, 'https://pzykosis666hfansub.com' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class Pzykosis666HFansub extends FoolSlide {

    /**
     *
     *
    constructor() {
        super();
        super.id = 'pzykosis666hfansub';
        super.label = 'Pzykosis666HFansub';
        this.tags = [ 'manga', 'high-quality', 'spanish', 'scanlation' ];
        this.url = 'https://pzykosis666hfansub.com';
        this.path = '/online/directory/';
        this.language = 'spanish';
    }
}
*/