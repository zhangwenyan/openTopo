import BaseElement from "./element/BaseElement";
import BaseContainer from "./element/node/container/BaseContainer";

export default class Scene {
    elements: BaseElement[] = [];
    fillStyle = 'gray';
    scaleX = 1;
    scaleY = 1;
    translateX = 0;//横向偏移
    translateY = 0;//纵向偏移
    dragEnable = true;

    paint(ctx: CanvasRenderingContext2D, width: number, height: number, ps: { focusEle: BaseElement | null }) {
        ctx.save();

        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(0, 0, width, height);
        //位移
        ctx.translate(this.translateX, this.translateY);

        //中心缩放
        ctx.translate(width / 2 - this.translateX, height / 2 - this.translateY);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.translate(-width / 2 + this.translateX, -height / 2 + this.translateY);

        for (let ele of this.elements) {
            if (ele.visible) {
                ele.paint(ctx, {
                    focusEle: ps.focusEle
                })
            }
        }
        ctx.restore();
    }
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
        }
    }
    remove(...eles: BaseElement[]): void {
        for (let ele of eles) {
            for (let i = 0; i < this.elements.length; i++) {
                let sourceEle = this.elements[i];
                if (ele === sourceEle) {
                    this.elements.splice(i, 1);
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
}