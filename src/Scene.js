import Base from './Base'
//画布
export default class Scene extends Base {
    constructor(stage) {
        super();
        this.fillStyle = 'green';//背景
        this.text = null;//标题
        this.elements = [];

        this.dragEnable = true;//可拖拽
        this.scaleX = 1;//横向缩放角度
        this.scaleY = 1;//纵向缩放角度
        this.translateX = 0;//横向偏移
        this.translateY = 0;//纵向偏移
        this.wheelZoom = 0.95;//鼠标缩放速度

        stage.scene = this;
    }
    paint(ctx) {
        var canvas = ctx.canvas;
        ctx.save();

        //#region 设置背景
        ctx.save();
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
        //#endregion

        if (this.text) {
            ctx.save();
            ctx.textBaseline = "top";
            ctx.font = "15px Arial";
            ctx.fillText(this.text, 10, 10);
            ctx.restore();
        }

        //位移
        ctx.translate(this.translateX, this.translateY);

        //#region 中心缩放
        ctx.translate(canvas.width / 2 - this.translateX, canvas.height / 2 - this.translateY);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.translate(-canvas.width / 2 + this.translateX, -canvas.height / 2 + this.translateY);
        //#endregion


        for (var i in this.elements) {
            var ele = this.elements[i];
            if (ele.visible) {
                ele.paint(ctx, {
                    focus: ele == this.focusEle
                });
            }
        }

        ctx.restore();

    }

    /**
     * 添加元素
     */
    add() {
        for (var i in arguments) {
            this.elements.push(arguments[i]);
        }
        this.elements.sort(function (a, b) {
            return a.z_index - b.z_index;
        });
    }
}