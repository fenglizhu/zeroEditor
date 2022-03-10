import { createElemByTag } from '../utils/dom'

import menusConfig from '../config/menus'

class Title {
    public $titleEle!: HTMLElement;
    constructor() {
        this.initTitle()
    }
    initTitle() {
        let $ul = createElemByTag('ul');
        $ul.className = 'tool-bar-item-panel'
        for (let i = 0; i < menusConfig.title.length; i++) {
            let $li = createElemByTag('li');
            $li.className = 'tbip-item'
            $li.innerHTML = `<${menusConfig.title[i]}>${menusConfig.title[i]}</${menusConfig.title[i]}>`
            $ul.appendChild($li);
        }
        this.$titleEle = $ul;
        console.log(this.$titleEle);
        
    }
}

export default Title