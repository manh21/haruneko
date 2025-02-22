import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'mangaforest',
        title: 'MangaForest'
    },
    container: {
        url: 'https://mangaforest.me/tales-of-demons-and-gods',
        id: '/tales-of-demons-and-gods',
        title: 'Tales Of Demons And Gods'
    },
    child: {
        id: '/tales-of-demons-and-gods/chapter-1-rebirth',
        title: 'Chapter 1: Rebirth'
    },
    entry: {
        index: 0,
        size: 671_908,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, () => fixture.AssertWebsite());