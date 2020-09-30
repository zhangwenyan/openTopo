import BaseContainer from "./BaseContainer";
import BaseElement from "../../BaseElement";
import BaseNode from "../BaseNode";

export default class RectContainer extends BaseContainer {
  nodeInBound(ele: BaseNode): boolean {
    let r2 = ele.rectCase();
    if (
      r2[0] >= 0 &&
      r2[1] >= 0 &&
      r2[2] <= this.width &&
      r2[3] <= this.height
    ) {
      return true;
    } else {
      return false;
    }
  }
  rectCase(): [number, number, number, number] {
    return [this.x, this.y, this.x + this.width, this.y + this.height];
  }
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fillStyle = "#5555aa";
  fillStyle_text: string = "black"; //文本样式
  fillStyle_text_focus: string = "gold"; //获得焦点时文本颜色
  font_text: string = "15px Arial"; //文本字体
  scaleX: number = 1;
  scaleY: number = 1;

  constructor(
    text: string,
    x: number,
    y: number,
    width: number = 200,
    height: number = 200
  ) {
    super();
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  centerPoint(): [number, number] {
    return [this.x + this.width / 2, this.y + this.height / 2];
  }
  paint(
    ctx: CanvasRenderingContext2D,
    ps: { focusEle: BaseElement | null }
  ): void {
    ctx.save();

    if (this.selected) {
      this.paintSelected(ctx);
    }
    if (ps.focusEle === this) {
      this.paintFocus(ctx);
    }

    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();

    if (this.text) {
      ctx.save();
      ctx.fillStyle = this.selected
        ? this.fillStyle_text_focus
        : this.fillStyle_text;
      ctx.textAlign = "center";
      ctx.font = this.font_text;
      ctx.textBaseline = "top";
      ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height);
      ctx.restore();
    }

    ctx.save();
    ctx.translate(this.x, this.y);
    for (let ele of this.elements) {
      if (ele.visible) {
        ele.paint(ctx, {
          focusEle: ps.focusEle,
        });
      }
    }
    ctx.restore();
  }

  paintSelected(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "#eeeeaa";
    ctx.globalAlpha = 0.3;
    const bw = 5;
    ctx.fillRect(
      this.x - bw,
      this.y - bw,
      this.width + bw * 2,
      this.height + bw * 2
    );
    ctx.restore();
  }

  paintFocus(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "#eeeeee";
    ctx.globalAlpha = 0.2;
    const bw = 5;
    ctx.fillRect(
      this.x - bw,
      this.y - bw,
      this.width + bw * 2,
      this.height + bw * 2
    );
    ctx.restore();
  }

  inBound(px: number, py: number): boolean {
    return (
      px >= this.x &&
      px <= this.x + this.width &&
      py >= this.y &&
      py <= this.y + this.height
    );
  }
}
