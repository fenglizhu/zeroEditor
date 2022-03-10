
import Menus from './index';
import menusConfig, { menusMap } from '../config/menus';
import { createElemByTag } from '../utils/dom'
import TitlePanel from '../panel/title'


class Title extends Menus{
    constructor() {
        // 生成
        let $menusFlagment = document.createDocumentFragment();
        for (let i = 0; i < menusConfig.menus.length; i++) {
            let $menuItem = createElemByTag('div');
            $menuItem.className = 'z-tool-bar-item';
            $menuItem.innerHTML = `
                <span>${menusConfig.menus[i]}</span>
                <div class="tool-bar-item-toast">${menusMap[menusConfig.menus[i]]}</div>
            `
            $menusFlagment.appendChild($menuItem)
        }
        let panel = new TitlePanel()
        console.log(panel);
        console.log($menusFlagment);
        
        super()
    }
}

export default Title