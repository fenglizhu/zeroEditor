/**
 * 编辑器构造函数
 */
 import { 
    $$,
    createElemByHTML 
} from './utils/dom';

/**
 * 编辑器类
 */
export class ZeroEditors {
    public id: string;
    constructor(id: string) {
        this.id = id;
        // 初始化
        this.init()
    }
    /**
     * 初始化
     */
    init(){
        let zoroContainer = $$(this.id);
        zoroContainer.attr('class', 'zero-container');
        zoroContainer.attr('contenteditable', 'true');
        zoroContainer.attr('autocapitalize', 'off');  // 自动大小写
        zoroContainer.attr('autocorrect', 'off');     // 纠错
        
        zoroContainer.attr('autocomplete', 'off');    // 是否让浏览器自动记录自谦输入的值
        zoroContainer.attr('spellcheck', 'false');    // 拼写检查
        var children = zoroContainer.children;
        // 检查是否有子元素
        if(children && children.length) {

        }else {
            let p: HTMLElement[] = createElemByHTML('<p><br></p>');
            if(p.length) {
                for (let i = 0; i < p.length; i++) {
                    zoroContainer.append(p[i]);
                }
            }
        }
    }
};

function zeroEditor(id: string): ZeroEditors {
    return new ZeroEditors(id)
}

export default zeroEditor;




