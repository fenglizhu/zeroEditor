/**
 * DOM操作
 */
import { toArray } from './utils'
/**
 * 创建DOM操作
 */
  export class DomElement {
    public id: string;
    public containerElement: any;
    constructor(id: string) {
        this.id = id;
        this.containerElement = null;
        this.initDom();
    }
    /**
     * 初始化dom
     */
    initDom() {
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
    append(node: HTMLElement) {
        this.containerElement.appendChild(node);
    }
}

/**
 * 通过html字符串创建dom元素
 * @param {*} html 
 * @returns 
 */
export function createElemByHTML(html:string): HTMLElement[] {
    const div:HTMLElement = document.createElement('div');
    div.innerHTML = html;
    return toArray(div.children);
}

export function $$(id:string) {
    return new DomElement(id);
}