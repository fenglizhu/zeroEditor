
import Menus from './index';
import menusConfig, { menusMap } from '../config/menus';
import { createElemByHTML, $$ } from '../utils/dom'
import TitlePanel from '../panel/title'
import { ZeroEditors } from '../zeroEditor'

import { DomElement, documentSeloctor} from '../utils/dom'

class Title extends Menus{
    name: string;
    $elem: DomElement<documentSeloctor>[];
    constructor(editor: ZeroEditors) {
        // 生成
        let $elem = createElemByHTML(`<div class="z-tool-bar-item">
            <span>T</span>
            <div class="tool-bar-item-toast">标题</div>
        </div>`);
        let panel = new TitlePanel();
        console.log(panel.$elem);
        console.log($elem);
        super()
        this.name = 'title';
        this.$elem = $elem;
    }
}

export default Title