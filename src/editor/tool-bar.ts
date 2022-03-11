import {
    createElemByHTML,
    DomElement
} from '../utils/dom';

import { ZeroEditors } from '../zeroEditor'

import Menus from '../menus/index'
import Title from '../menus/title'

class Toolbar {
    public toolBarContainer!: DomElement[];
    constructor(editor: ZeroEditors) {
        this.toolBarContainer = createElemByHTML('<div class="z-tool-bar"></div>')
        editor.toolbar = this.toolBarContainer;
        this.setToolBar(editor);
    }
    /**
     * 初始化工具栏
     */
    setToolBar(editor: ZeroEditors) {
        let title = new Title(editor);
        editor.Title = title;
        let titleEle:any = title.$elem[0];
        editor.toolbar[0].append(titleEle);
        console.log(editor);
    }
}

export default Toolbar