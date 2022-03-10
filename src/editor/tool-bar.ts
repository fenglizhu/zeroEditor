import {
    createElemByHTML
} from '../utils/dom';

import Menus from '../menus/index'
import Title from '../menus/title'


class Toolbar {
    public toolBarContainer!: HTMLElement[];
    constructor() {
        this.toolBarContainer = createElemByHTML('<div class="z-tool-bar"></div>');
        this.setToolBar();
    }
    /**
     * 初始化工具栏
     */
    setToolBar() {
        // let menus = new Menus();
        // let title = new Title();
        
        
    }
}

export default Toolbar