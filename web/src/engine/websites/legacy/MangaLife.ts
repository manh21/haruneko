// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './MangaLife.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('mangalife', `MangaLife`, 'https://manga4life.com' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class MangaLife extends Connector {

    constructor() {
        super();
        super.id = 'mangalife';
        super.label = 'MangaLife';
        this.tags = [ 'manga', 'webtoon', 'english' ];
        this.url = 'https://manga4life.com';
        this.requestOptions.headers.set('x-cookie', 'FullPage=yes');
        this.requestOptions.headers.set('x-referer', this.url);
    }

    async _getMangaFromURI(uri) {
        let request = new Request(uri, this.requestOptions);
        let data = await this.fetchDOM(request, 'ul.list-group li h1');
        let id = uri.pathname.split('/').pop();
        let title = data[0].textContent.trim();
        return new Manga(this, id, title);
    }

    async _getMangas() {
        let request = new Request(new URL('/directory/', this.url), this.requestOptions);
        let data = await this.fetchRegex(request, /vm\.FullDirectory\s*=\s*(.+\})\s*g);
        return JSON.parse(data[0]).Directory.map(manga => {
            // resolve html entities
            let element = document.createElement('div');
            element.innerHTML = manga.s;
            return {
                id: manga.i,
                title: element.textContent
            };
        });
    }

    async _getChapters(manga) {
        let script = `
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        let vm = angular.element($('[ng-app="MainApp"]')).scope().vm;
                        let chapters = vm.Chapters.map(chapter => {
                            return {
                                id: '/read-online/' + vm.IndexName + vm.ChapterURLEncode(chapter.Chapter).replace(/-page-\\d+/, ''),
                                title: (chapter.Type || 'Chapter') + ' ' + vm.ChapterDisplay(chapter.Chapter),
                                language: ''
                            }
                        });
                        resolve(chapters);
                    } catch(error) {
                        reject(error);
                    }
                }, 2500);
            });
        `;
        let request = new Request(new URL('/manga/' + manga.id, this.url), this.requestOptions);
        return Engine.Request.fetchUI(request, script);
        /*
         *let request = new Request(new URL('/rss/' + manga.id + '.xml', this.url), this.requestOptions);
         *let data = await this.fetchDOM(request, 'channel item');
         *return data.map(element => {
         *    return {
         *        id: this.getRootRelativeOrAbsoluteLink(element.querySelector('link').textContent.trim(), this.url),
         *        title: element.querySelector('title').textContent.replace(manga.title, '').trim(),
         *        language: ''
         *    };
         *});
         *
    }

    async _getPages(chapter) {
        let script = `
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        resolve([...document.querySelectorAll('div.ImageGallery div[ng-repeat] img')].map(img => img.src));
                    } catch(error) {
                        reject(error);
                    }
                }, 2500);
            });
        `;
        let request = new Request(new URL(chapter.id, this.url), this.requestOptions);
        let data = await Engine.Request.fetchUI(request, script);
        return data.map(element => this.createConnectorURI(this.getAbsolutePath(element, request.url)));
    }
}
*/