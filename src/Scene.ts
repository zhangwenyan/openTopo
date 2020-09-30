import BaseElement from "./element/BaseElement";
import IContainer from "./IContainer";
import { add, remove, eachAllEles } from "./CommMethod";
import BaseNode from "./element/node/BaseNode";
import IElement from "./element/IElement";

export default class Scene implements IContainer {
  eachAllEles(f: (ele: IElement) => void) {
    eachAllEles(this, f);
  }

  nodeInBound(node: BaseNode): boolean {
    return true;
  }
  /**
   * 填充颜色
   */
  fillStyle = "gray";
  /**
   * x方向缩放倍数
   */
  scaleX = 1;
  /**
   * y方向缩放倍数
   */
  scaleY = 1;
  /**
   * 横向偏移
   */
  translateX = 0;
  /**
   * 纵向偏移
   */
  translateY = 0;
  /**
   * 是否可以拖动
   */
  dragEnable = true;
  elements: BaseElement[] = [];
  add(...eles: BaseElement[]): void {
    add(this, ...eles);
  }
  remove(...eles: BaseElement[]): void {
    remove(this, ...eles);
  }
  paint(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    ps: { focusEle: BaseElement | null }
  ) {
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
          focusEle: ps.focusEle,
        });
      }
    }
    ctx.restore();
  }
}
