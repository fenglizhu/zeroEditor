/**
 * 编辑器构造函数
 */
 import { 
    $$,
    createElemByHTML,
    DomElement,
    documentSeloctor
} from './utils/dom';

import Toolbar from './editor/tool-bar'

/**
 * 编辑器类
 */
export class ZeroEditors {
    public id: documentSeloctor;
    public zoroContainer!: DomElement;
    public panel !: DomElement<documentSeloctor>[];
    public Title !: Object;
    public toolbar!: DomElement<documentSeloctor>[];
    constructor(id: documentSeloctor) {
        this.id = id;
        // 初始化编辑器内容
        this.init();
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
            let p: DomElement[] = createElemByHTML('<p><br></p>');
            if(p.length) {
                this.zoroContainer.append(p);
            }
        }
        
    }
    /**
     * 初始化toolbar
     */
    private initToolBar() {
        let toolBarContainer: DomElement[] = new Toolbar(this).toolBarContainer;
        this.zoroContainer.insertBefore(toolBarContainer);
    }

    create() {
        // 初始化编辑器导航
        this.initToolBar();
        
    }
};

function zeroEditor(id: string): ZeroEditors {
    return new ZeroEditors(id);
}

export default zeroEditor;




