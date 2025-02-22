import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'boyslove',
        title: 'Boys Love'
    },
    container: {
        url: 'https://boyslove.me/boyslove/sex-exercise/',
        id: JSON.stringify({ post: '47957', slug: '/boyslove/sex-exercise/' }),
        title: 'Sex Exercise'
    },
    child: {
        id: '/boyslove/sex-exercise/chapter-1/',
        title: 'Chapter 1'
    },
    entry: {
        index: 0,
        size: 76_878,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, () => fixture.AssertWebsite());