import BaseContainer from "./BaseContainer";

export default class RectContainer extends BaseContainer {

    x;
    y;
    width = 100;
    height = 100;
    fillStyle = 'gray';//背景颜色

    constructor(ps) {
        super();
        this.text = ps.text;
        this.x = ps.x;
        this.y = ps.y;
        this.width = ps.width;
        this.height = ps.height;
    }

    paint(ctx, ps) {
        ctx.save();
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }

    inBound(pointX, pointY) {
        return pointX >= this.x && pointX <= this.x + this.width && pointY >= this.y && pointY <= this.y + this.height;
    }


}