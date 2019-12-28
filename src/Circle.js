import Element from './Element'
/**
 * x,y  圆心
 * radius   半径
 */
export default class Circle extends Element {
    constructor(text, x, y) {
        super();
        this.text = text;
        this.x = x;
        this.y = y;
        this.fillStyle = 'blue';
        this.radius = 30;
        this.fillStyle = 'blue';//背景顔色
        this.fillStyle_text = 'black';
        this.fillStyle_text_focus = 'gold';
        this.font_text = '15px Arial';
        this.z_index = 1;

    }
    centerPoint() {
        return {
            x: this.x,
            y: this.y
        }
    }

    paint(ctx,ps) {
        ctx.save();
        if (ps && ps.focus) {
            this.paintFocus(ctx);
        }
        if (this.selected) {
            this.paintSelected(ctx);
        }

        ctx.fillStyle = this.fillStyle;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.fillStyle = this.fillStyle_text;
        ctx.textAlign = 'center';
        ctx.font = this.font_text;
        ctx.textBaseline = 'top';
        ctx.fillText(this.text, this.x , this.y + this.radius);
        if (ps && ps.focus) {
            ctx.fillStyle = this.fillStyle_text_focus;
            ctx.fillText(this.text, this.x , this.y + this.radius);
        }
     
        ctx.restore();
    }
    paintFocus(ctx) {
        ctx.save();
        ctx.fillStyle = '#eeee66';
        ctx.globalAlpha = 0.2;
        var bw = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius+bw, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();
    }
    paintSelected(ctx) {
        ctx.save();
        ctx.fillStyle = '#eeeeaa';
        ctx.globalAlpha = 0.3;
        var bw = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius+bw, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();
    }
    inBound(px, py) {
        var dx = this.x - px;
        var dy = this.y - py;
        return dx * dx + dy * dy <= this.radius * this.radius;
    }

}