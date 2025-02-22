import { Tags } from '../Tags';
import icon from './DeathTollScans.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Foolslide from './decorators/FoolSlide';
import * as Common from './decorators/Common';

@Foolslide.MangaCSS(/^https?:\/\/reader\.deathtollscans\.net\/[^/]+\//, 'h1.title')
@Foolslide.MangasMultiPageCSS()
@Foolslide.ChaptersSinglePageCSS()
@Foolslide.PagesSinglePageREGEX()
@Common.ImageDirect()

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('deathtollscans', `DeathTollScans`, 'https://reader.deathtollscans.net', Tags.Language.English, Tags.Source.Scanlator, Tags.Media.Manga);
    }

    public override get Icon() {
        return icon;
    }
}