// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './MangaDenizi.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('mangadenizi', `MangaDenizi`, 'http://www.mangadenizi.com' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class MangaDenizi extends MangaReaderCMS {

    /**
     *
     *
    constructor() {
        super();
        super.id = 'mangadenizi';
        super.label = 'MangaDenizi';
        this.tags = [ 'manga', 'high-quality', 'turkish', 'scanlation' ];
        this.url = 'http://www.mangadenizi.com';
    }
}
*/