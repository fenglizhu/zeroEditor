import { createElemByHTML, DomElement } from '../utils/dom'

import menusConfig from '../config/menus'

class Title {
    public $titleEle!: HTMLElement;
    public name: string | undefined;
    public $elem: DomElement[] | undefined
    constructor() {
        this.initPanel()
    }
    initPanel() {
        let $ul: DomElement[] = createElemByHTML(`
            <ul class="tool-bar-item-panel"></ul>
        `);
        for (let i = 0; i < menusConfig.title.length; i++) {
            let html = `<li class="tbip-item"><${menusConfig.title[i]}>${menusConfig.title[i]}</${menusConfig.title[i]}></li>`
            let $li = createElemByHTML(html)
            $ul[0].append($li);
        }
        this.$elem = $ul;
    }
}

export default Title