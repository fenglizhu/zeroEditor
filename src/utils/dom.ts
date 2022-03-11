/**
 * DOM操作
 */
import { toArray } from './utils';

export type documentSeloctor = 
    | string
    | DomElement
    | Document
    | Node
    | NodeList
    | ChildNode
    | ChildNode[]
    | Element
    | HTMLElement
    | HTMLElement[]
    | HTMLCollection
    | EventTarget
    | null
    | undefined

/**
 * 创建DOM操作
 */
  export class DomElement<T extends documentSeloctor = documentSeloctor> {
    public selotor ?: documentSeloctor;
    public containerElement: any;
    public innerHTML: string | undefined;
    constructor(selotor: documentSeloctor) {
        this.selotor = selotor;
        this.containerElement = null;
        this.initDom();
    }
    /**
     * 初始化dom
     */
    initDom() {
        console.log(this.selotor);
        
        let containerElem = createElemByHTML(this.selotor)
        console.log(containerElem);
        
        let node: Node = document.createElement('div');
        let containerBox = document.getElementById(this.id);
        if(!containerBox) {
            throw new Error('id is no defind')
        }
        this.containerElement = node;
        containerBox.append(node);
    }
    /**
     * 设置元素属性
     * @param {*} key 
     * @param {*} value 
     */
    attr(key:string, value:string){
        this.containerElement.setAttribute(key, value);
    }
    /**
     * 返回子元素集合
     * @returns 
     */
    children():DomElement {
        return this.containerElement.children;
    }
    /**
     * 插入子节点
     * @param {*} node 子节点
     */
    append(children: DomElement[]) {
        children.forEach(child => {
            this.containerElement.appendChild(child);
        });
    }

    /**
     * 在前面插入子节点
     * @param node 子节点集合
     */
    insertBefore(node: DomElement[]) {
        let parent = this.parent();
        if(node.length) {
            for (let i = 0; i < node.length; i++) {
                let nodeChild: any = node[i];
                parent?.insertBefore(nodeChild, this.containerElement);
            }
        }
    }

    /**
     * 
     * @returns 
     */
    parent(): HTMLElement{
        return this.containerElement.parentNode
    }
}

/**
 * 通过html字符串创建dom元素
 * @param {*} html 
 * @returns 
 */
export function createElemByHTML(html:string): DomElement[] {
    const div:HTMLElement = document.createElement('div');
    div.innerHTML = html;
    return toArray(div.children);
}

export function $$(arg: ConstructorParameters<typeof DomElement>): DomElement {
    return new DomElement(...arg);
}