/**
 * 编辑器构造函数
 */
 import { 
    $$,
    createElemByHTML,
    DomElement
} from './utils/dom';

import Toolbar from './editor/tool-bar'

/**
 * 编辑器类
 */
export class ZeroEditors {
    public id: string;
    public zoroContainer!: DomElement;
    constructor(id: string) {
        this.id = id;
        // 初始化编辑器内容
        this.init();
        // 初始化编辑器导航
        this.initToolBar();
    }
    /**
     * 初始化
     */
    init(){
        this.zoroContainer = $$(this.id);
        this.zoroContainer.attr('class', 'zero-container');
        this.zoroContainer.attr('contenteditable', 'true');
        this.zoroContainer.attr('autocapitalize', 'off');  // 自动大小写
        this.zoroContainer.attr('autocorrect', 'off');     // 纠错
        this.zoroContainer.attr('autocomplete', 'off');    // 是否让浏览器自动记录自谦输入的值
        this.zoroContainer.attr('spellcheck', 'false');    // 拼写检查
        var children = this.zoroContainer.children;
        // 检查是否有子元素
        if(children && children.length) {

        }else {
            let p: HTMLElement[] = createElemByHTML('<p><br></p>');
            if(p.length) {
                for (let i = 0; i < p.length; i++) {
                    this.zoroContainer.append(p[i]);
                }
            }
        }
        console.log(this.zoroContainer);
        
    }
    /**
     * 初始化toolbar
     */
    initToolBar() {
        let parent = this.zoroContainer.parent();
        let toolBarContainer: HTMLElement[] = new Toolbar().toolBarContainer;
        if(toolBarContainer.length) {
            for (let i = 0; i < toolBarContainer.length; i++) {
                parent.insertBefore(toolBarContainer[i],this.zoroContainer.containerElement);
            }
        }
    }
};

function zeroEditor(id: string): ZeroEditors {
    return new ZeroEditors(id);
}

export default zeroEditor;




