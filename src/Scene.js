import Base from './Base'
import BaseNode from './node/BaseNode';
import Link from './Link';
import BaseContainer from './container/BaseContainer';
//画布
export default class Scene extends Base {

    text = null;//标题,左上角
    fillStyle = 'green';

    elements = [];
    element_nodes = [];
    element_links = [];
    element_containers = [];

    elementMap = {}//暂时用来区分add是否重复添加元素

    dragEnable = true;//可拖拽
    scaleX = 1;//横向缩放角度
    scaleY = 1;//纵向缩放角度
    translateX = 0;//横向偏移
    translateY = 0;//纵向偏移
    wheelZoom = 0.95;//鼠标缩放速度

    constructor(stage) {
        super();
        stage.scene = this;//#TODO
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



        for (let c of this.element_containers) {
            if (c.visible) {
                c.paint(ctx, {
                    focus: c == this.focusEle
                })
            }
        }

        for (let link of this.element_links) {
            if (link.visible) {
                link.paint(ctx, {
                    focus: link == this.focusEle
                })
            }
        }

        for (let node of this.element_nodes) {
            if (node.visible) {
                node.paint(ctx, {
                    focus: node == this.focusEle
                })
            }
        }


        ctx.restore();

    }

    /**
     * 添加元素
     */
    add() {
        //#TODO 算法可能慢,用buff或者一步完成
        for (let ele of arguments) {
            this.elements.push(ele);
            if (ele instanceof BaseNode) {
                this.element_nodes.push(ele);
            }
            else if (ele instanceof Link) {
                this.element_links.push(ele);
            }
            else if (ele instanceof BaseContainer) {
                this.element_containers.push(ele);
            }
        }
    }

    /**
     * 移除元素
     */
    remove(ele) {
        for (let i in this.elements) {
            let ei = this.elements[i];
            if (ele == ei) {
                this.elements.splice(i, 1);
                if (ele instanceof INode) {
                    for (let j in this.element_nodes) {
                        let ej = this.element_nodes[j];
                        if (ele == ej) {
                            this.element_nodes.splice(j, 1);
                        }
                    }
                }
                else if (ele instanceof Link) {
                    for (let j in this.element_links) {
                        let ej = this.element_links[j];
                        if (ele == ej) {
                            this.element_links.splice(j, 1);
                        }
                    }
                }
                else if (ele instanceof BaseContainer) {
                    for (let j in this.element_containers) {
                        let ej = this.element_containers[j];
                        if (ele == ej) {
                            this.element_containers.splice(j, 1);
                        }
                    }
                }
                break;
            }
        }
    }
}