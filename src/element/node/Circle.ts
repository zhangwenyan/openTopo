import BaseNode from "./BaseNode"
import BaseElement from "../BaseElement";

export default class Circle extends BaseNode {
    rectCase(): [number, number, number, number] {
        return [this.x - this.radius, this.y - this.radius, this.x + this.radius, this.y + this.radius];
    }
    text: string;
    x: number;
    y: number;
    radius: number;//半径
    fillStyle: string = 'blue';//背景颜色
    fillStyle_text = 'black';
    fillStyle_text_focus = 'gold';
    font_text = '15px Arial';
    centerPoint(): [number, number] {
        return [this.x, this.y];
    }
    paint(ctx: CanvasRenderingContext2D, ps: { focusEle: BaseElement | null }): void {
        ctx.save();
        if (this.selected) {
            this.paintSelected(ctx);
        }
        if (ps.focusEle === this) {
            this.paintFocus(ctx);
        }

        ctx.fillStyle = this.fillStyle;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();

        if (this.text) {
            ctx.save();
            ctx.fillStyle = ps.focusEle === this ? this.fillStyle_text_focus : this.fillStyle_text;
            ctx.textAlign = 'center';
            ctx.font = this.font_text;
            ctx.textBaseline = 'top';
            ctx.fillText(this.text, this.x, this.y + this.radius);
            ctx.restore();
        }

        ctx.restore();
    }

    paintFocus(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.fillStyle = '#eeee66';
        ctx.globalAlpha = 0.2;
        const bw = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + bw, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();
    }

    paintSelected(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.fillStyle = '#eeeeaa';
        ctx.globalAlpha = 0.3;

        const bw = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + bw, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();
    }
    constructor(text: string, x: number, y: number, radius: number = 30) {
        super();
        this.text = text;
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    inBound(pointX: number, pointY: number): boolean {
        let dx = this.x - pointX;
        let dy = this.y - pointY;
        return dx * dx + dy * dy <= this.radius * this.radius;
    }
}