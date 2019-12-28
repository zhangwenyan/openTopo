import Element from './Element'

export default class Rect extends Element {
    constructor(text, x, y) {
        super();
        this.text = text;//标题文本
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.fillStyle = 'blue';//背景顔色
        this.fillStyle_text = 'black';
        this.fillStyle_text_focus = 'gold';
        this.font_text = '15px Arial';
        this.z_index = 1;
    }
    centerPoint() {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        }
    }

    paintFocus(ctx) {
        ctx.save();
        ctx.fillStyle = '#eeeeee';
        ctx.globalAlpha = 0.2;
        var bw = 5;
        ctx.fillRect(this.x - bw, this.y - bw, this.width + bw * 2, this.height + bw * 2);
        ctx.restore();
    }
    paintSelected(ctx) {
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
            this.paintFocus(ctx);
        }
        if (this.selected) {
            this.paintSelected(ctx);
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

    setImage(imagesrc) {
        var img = new Image();
        img.src = imagesrc;
        img.onload = function () {
            img.loadSuccess = true;
        };
        this.image = img;
    }

    inBound(pointX, pointY) {
        return pointX >= this.x && pointX <= this.x + this.width && pointY >= this.y && pointY <= this.y + this.height;
    }

}