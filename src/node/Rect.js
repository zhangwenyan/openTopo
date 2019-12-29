import Element from '../Element'
import BaseNode from './BaseNode';

export default class Rect extends BaseNode {
    text = null;
    x = 0;
    y = 0;
    width = 30;
    height = 30;
    fillStyle = 'blue';//背景颜色
    fillStyle_text = 'black';//文本样式
    fillStyle_text_focus = 'gold';//获得焦点时文本颜色
    font_text = '15px Arial';//文本字体
    _z_index = 1;

    constructor(text, x, y) {
        super();
        this.text = text;//标题文本
        this.x = x;
        this.y = y;
    }
    centerPoint() {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        }
    }

    _paintFocus(ctx) {
        ctx.save();
        ctx.fillStyle = '#eeeeee';
        ctx.globalAlpha = 0.2;
        var bw = 5;
        ctx.fillRect(this.x - bw, this.y - bw, this.width + bw * 2, this.height + bw * 2);
        ctx.restore();
    }
    _paintSelected(ctx) {
        ctx.save();
        ctx.fillStyle = '#eeeeaa';
        ctx.globalAlpha = 0.3;
        var bw = 5;
        ctx.fillRect(this.x - bw, this.y - bw, this.width + bw * 2, this.height + bw * 2);
        ctx.restore();
    }

    paint(ctx, ps) {
        ctx.save();
        if (ps && ps.focus) {
            this._paintFocus(ctx);
        }
        if (this.selected) {
            this._paintSelected(ctx);
        }

        var image = null;
        if (this.image && this.image.loadSuccess) {
            image = this.image;
            ctx.drawImage(image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = this.fillStyle;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        if (this.text) {
            ctx.save();
            ctx.fillStyle = this.fillStyle_text;
            ctx.textAlign = 'center';
            ctx.font = this.font_text;
            ctx.textBaseline = 'top';
            ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height);
            if (ps && ps.focus) {
                ctx.fillStyle = this.fillStyle_text_focus;
                ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height);
            }
            ctx.restore();
        }

        ctx.restore();
    }


    set image(val) {//must loaded or url
        if (typeof (val) == 'string') {
            this._image = new Image();
            this._image.src = val;
            let that = this;
            this._image.onload = () => {
                that._image.loadSuccess = true;
            };
        } else {
            this._image = val;
            this._image.loadSuccess = true;
        }
    }

    get image() {
        return this._image;
    }

    inBound(pointX, pointY) {
        return pointX >= this.x && pointX <= this.x + this.width && pointY >= this.y && pointY <= this.y + this.height;
    }

}