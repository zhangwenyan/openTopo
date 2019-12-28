import Element from './Element'

export default class Link extends Element{
    constructor(nodeA,nodeZ){
        super();
        this.nodeA = nodeA;
        this.nodeZ = nodeZ;

        this.lineWidth = 2;//线宽
        this.strokeStyle = 'yellow';//线条样式
        this.z_index = 0;
    }

    paint(ctx){
        ctx.save();
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        var spoint = this.nodeA.centerPoint();
        var dpoint = this.nodeZ.centerPoint();
        ctx.beginPath();
        ctx.moveTo(spoint.x,spoint.y);
        ctx.lineTo(dpoint.x,dpoint.y);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }

}