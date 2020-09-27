import BaseElement from "./BaseElement";
import { getDistance } from '../utils'
import BaseNode from "./node/BaseNode";
export default class Link extends BaseElement {
    zIndex: number = 0;
    nodeA: BaseNode;
    nodeZ: BaseNode;
    lineWidth: number = 2;
    strokeStyle = 'yellow';
    constructor(nodeA: BaseNode, nodeZ: BaseNode) {
        super();
        this.nodeA = nodeA;
        this.nodeZ = nodeZ;
    }


    paint(ctx: CanvasRenderingContext2D, ps: { focusEle: BaseElement | null }): void {
        ctx.save();

        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;

        if (this.selected || ps.focusEle === this) {
            ctx.shadowColor = 'black';
            ctx.shadowBlur = 20;
        }

        let sPoint = this.nodeA.centerPoint();
        let dPoint = this.nodeZ.centerPoint();
        ctx.beginPath();
        ctx.moveTo(sPoint[0], sPoint[1]);
        ctx.lineTo(dPoint[0], dPoint[1]);
        ctx.closePath();
        ctx.stroke();

        ctx.restore();
    }
    inBound(pointX: number, pointY: number): boolean {
        //#TODO先计算出三角形面积,然后算出高
        //即用三角形的三个顶点坐标求其面积的公式为: S=(1/2)*(x1y2+x2y3+x3y1-x1y3-x2y1-x3y2)。
        let x1 = pointX;
        let y1 = pointY;
        let x2 = this.nodeA.centerPoint()[0];
        let y2 = this.nodeA.centerPoint()[1];
        let x3 = this.nodeZ.centerPoint()[0];
        let y3 = this.nodeZ.centerPoint()[1];

        let s = Math.abs((x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2));
        let c = getDistance(this.nodeA.centerPoint(), this.nodeZ.centerPoint());
        let h = 2 * s / c;
        return h <= this.lineWidth;
    }


}