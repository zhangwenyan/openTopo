import BaseNode from "./BaseNode";
import BaseElement from "../BaseElement";

export default class Rect extends BaseNode {
    rectCase(): [number, number, number, number] {
        return [this.x, this.y, this.x + this.width, this.y + this.height];
    }

    text: string;
    x: number;
    y: number;
    width: number;
    height: number;
    fillStyle: string = 'blue'//背景演示
    fillStyle_text: string = 'black';//文本样式
    fillStyle_text_focus: string = 'gold';//获得焦点时文本颜色
    font_text: string = '15px Arial';//文本字体

    image: CanvasImageSource | null = null;
    setImage(val: CanvasImageSource | string | null) {
        if (typeof (val) === 'string') {
            this.image = new Image();
            this.image.src = val;
        } else {
            this.image = val;
        }
    }

    constructor(text: string, x: number, y: number, width: number = 30, height: number = 30) {
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

    paint(ctx: CanvasRenderingContext2D, ps: { focusEle: BaseElement | null }): void {
        ctx.save();
        if (this.selected) {
            this.paintSelected(ctx);
        }
        if (ps.focusEle === this) {
            this.paintFocus(ctx);
        }

        if (this.image && this.image.width) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = this.fillStyle;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        if (this.text) {
            ctx.save();
            ctx.fillStyle = ps.focusEle === this ? this.fillStyle_text_focus : this.fillStyle_text;
            ctx.textAlign = 'center';
            ctx.font = this.font_text;
            ctx.textBaseline = 'top';
            ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height);
            ctx.restore();
        }
        ctx.restore();
    }
    paintSelected(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.fillStyle = '#eeeeaa';
        ctx.globalAlpha = 0.3;
        const bw = 5;
        ctx.fillRect(this.x - bw, this.y - bw, this.width + bw * 2, this.height + bw * 2);
        ctx.restore();
    }

    paintFocus(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.fillStyle = '#eeeeee';
        ctx.globalAlpha = 0.2;
        const bw = 5;
        ctx.fillRect(this.x - bw, this.y - bw, this.width + bw * 2, this.height + bw * 2);
        ctx.restore();
    }


    inBound(px: number, py: number): boolean {
        return px >= this.x && px <= this.x + this.width && py >= this.y && py <= this.y + this.height;
    }

}