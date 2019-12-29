import Element from './Element'
import { getDistance } from './util';

/**
 * 连线
 */
export default class Link extends Element {

    lineWidth = 2;
    strokeStyle = 'yellow';
    _z_index = 0;
    nodeA;
    nodeZ;

    constructor(nodeA, nodeZ) {
        super();
        this.nodeA = nodeA;
        this.nodeZ = nodeZ;
    }

    paint(ctx,ps) {//ps = ps||{}
        ctx.save();
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;

        if (this.selected || ps.focus) {
            ctx.shadowColor = "black";
            ctx.shadowBlur = 20;
        }

        let spoint = this.nodeA.centerPoint();
        let dpoint = this.nodeZ.centerPoint();

        ctx.beginPath();
        ctx.moveTo(spoint.x, spoint.y);
        ctx.lineTo(dpoint.x, dpoint.y);
        ctx.closePath();

        ctx.stroke();
        ctx.restore();

    }


    inBound(pointX, pointY) {
        //#TODO先计算出三角形面积,然后算出高
        //即用三角形的三个顶点坐标求其面积的公式为: S=(1/2)*(x1y2+x2y3+x3y1-x1y3-x2y1-x3y2)。
        let x1 = pointX;
        let y1 = pointY;
        let x2 = this.nodeA.centerPoint().x;
        let y2 = this.nodeA.centerPoint().y;
        let x3 = this.nodeZ.centerPoint().x;
        let y3 = this.nodeZ.centerPoint().y;

        let s = Math.abs((x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2));
        let c = getDistance(this.nodeA.centerPoint(), this.nodeZ.centerPoint());
        let h = 2 * s / c;
        return h <= this.lineWidth;
    }

}