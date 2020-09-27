import BaseNode from "../BaseNode";
import BaseElement from "../../BaseElement";

export default abstract class BaseContainer extends BaseNode {
    elements: BaseElement[] = [];
    add(...eles: BaseElement[]): void {
        for (let ele of eles) {
            let bk = false;
            for (let i = 0; i < this.elements.length; i++) {
                let sele = this.elements[i];
                if (ele.zIndex < sele.zIndex) {
                    this.elements.splice(i, 0, ele);
                    bk = true;
                    break;
                }
            }
            if (!bk) {
                this.elements.push(ele);
            }
            ele.parent = this;
        }
    }
    remove(...eles: BaseElement[]): void {
        for (let ele of eles) {
            for (let i = 0; i < this.elements.length; i++) {
                let sourceEle = this.elements[i];
                if (ele === sourceEle) {
                    this.elements.splice(i, 1);
                    ele.parent = null;
                }
            }
        }
    }

    eachAllEles(f: Function) {
        this.elements.forEach(ele => {
            f(ele);
            if (ele instanceof BaseContainer) {
                ele.eachAllEles(f);
            }
        })
    }

    abstract nodeInBound(ele: BaseNode): boolean;

}