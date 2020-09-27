import Scene from "./Scene";
import BaseNode from "./element/node/BaseNode";
import BaseElement from "./element/BaseElement";
import BaseContainer from "./element/node/container/BaseContainer";

export default class Stage {
  findByContainer(rect: BaseContainer, px: number, py: number): BaseElement {
    px = px - rect.x;
    py = py - rect.y;
    for (let i = rect.elements.length - 1; i >= 0; i--) {
      let ele = rect.elements[i];
      if (ele instanceof BaseContainer) {
        return this.findByContainer(ele, px, py);
      } else if (ele.inBound(px, py)) {
        return ele;
      }
    }
    return rect;
  }
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  focusEle: BaseElement | null = null;
  scene: Scene;
  wheelZoom: number = 0.95;
  showFps = false;

  constructor(
    canvas: string | HTMLCanvasElement,
    scene: Scene,
    width?: number,
    height?: number
  ) {
    this.canvas =
      typeof canvas === "string"
        ? <HTMLCanvasElement>document.getElementById(canvas)
        : canvas;
    this.scene = scene;
    if (width) {
      this.canvas.width = width;
    }
    if (height) {
      this.canvas.height = height;
    }
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");

    let loop = () => {
      this.tick();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    this.canvas.addEventListener("mousemove", (evt: MouseEvent) => {
      if (evt.which == 1) {
        return;
      }
      let px = this.getCanvasPx(evt);
      let py = this.getCanvasPy(evt);
      let newFocus = null;
      for (let i = this.scene.elements.length - 1; i >= 0; i--) {
        //倒叙,优先选择位于上层的元素
        let ele = this.scene.elements[i];
        if (ele.inBound(px, py)) {
          if (ele instanceof BaseContainer) {
            newFocus = this.findByContainer(ele, px, py);
          } else {
            newFocus = ele;
          }
          break;
        }
      }
      this.focusEle = newFocus;
    });

    this.canvas.addEventListener("mousedown", (evt: MouseEvent) => {
      let px = this.getCanvasPx(evt);
      let py = this.getCanvasPy(evt);
      let dowmEle: BaseElement | null = null;
      for (let i = this.scene.elements.length - 1; i >= 0; i--) {
        let ele = this.scene.elements[i];
        if (ele.inBound(px, py)) {
          if (ele instanceof BaseContainer) {
            dowmEle = this.findByContainer(ele, px, py);
          } else {
            dowmEle = ele;
          }
          break;
        }
      }

      if (evt.ctrlKey) {
        //多选模式
        if (dowmEle) {
          dowmEle.selected = !dowmEle.selected;
        }
      } else {
        this.scene.eachAllEles((ele: BaseElement) => {
          ele.selected = ele === dowmEle;
        });
      }

      this.canvas.style.cursor = dowmEle ? "move" : "pointer";
      let sPx = px; //起点坐标
      let sPy = py;
      let evt_mousemove = (evt1: MouseEvent) => {
        let px1 = this.getCanvasPx(evt1);
        let py1 = this.getCanvasPy(evt1);
        let disX = px1 - sPx; //移动距离
        let disY = py1 - sPy;
        if (dowmEle) {
          sPx = px1;
          sPy = py1;
          this.scene.eachAllEles((ele: BaseElement) => {
            if (ele instanceof BaseNode) {
              let node = <BaseNode>ele;
              if (node.selected && node.dragEnable) {
                node.x += disX;
                node.y += disY;

                if (node.parent) {
                  //判断是否边界碰撞
                  if (!node.parent.nodeInBound(node)) {
                    node.x -= disX;
                    node.y -= disY;
                  }
                }
              }
            }
          });
        } else {
          //点在了场景Scene上面
          if (this.scene.dragEnable) {
            this.scene.translateX += disX;
            this.scene.translateY += disY;
          }
        }
      };
      this.canvas.addEventListener("mousemove", evt_mousemove);
      let evt_mouseup = () => {
        this.canvas.removeEventListener("mousemove", evt_mousemove);
        document.removeEventListener("mouseup", evt_mouseup);
        this.canvas.style.cursor = "default";
      };
      document.addEventListener("mouseup", evt_mouseup);
    });

    this.canvas.addEventListener("wheel", (evt) => {
      if (evt.deltaY > 0) {
        this.scene.scaleX *= this.wheelZoom;
        this.scene.scaleY *= this.wheelZoom;
      } else {
        this.scene.scaleX /= this.wheelZoom;
        this.scene.scaleY /= this.wheelZoom;
      }
    });
  }
  lastTime = new Date();
  tick() {
    if (this.showFps) {
      let now = new Date();
      let fps = Math.ceil(1000 / (now.getTime() - this.lastTime.getTime()));
      this.lastTime = now;
      this.scene.paint(this.ctx, this.canvas.width, this.canvas.height, {
        focusEle: this.focusEle,
      });
      this.ctx.fillStyle = "red";
      this.ctx.font = "15px Arial";
      this.ctx.textBaseline = "top";
      this.ctx.fillText(`FPS:${fps}`, 5, 5);
    } else {
      this.scene.paint(this.ctx, this.canvas.width, this.canvas.height, {
        focusEle: this.focusEle,
      });
    }
  }
  //获取鼠标点击scene相对位置
  getCanvasPx(evt: MouseEvent): number {
    return (
      (evt.clientX -
        this.canvas.offsetLeft +
        (document.documentElement || document.body).scrollLeft -
        this.canvas.width / 2) /
        this.scene.scaleX +
      this.canvas.width / 2 -
      this.scene.translateX
    );
  }

  getCanvasPy(evt: MouseEvent): number {
    return (
      (evt.clientY -
        this.canvas.offsetTop +
        (document.documentElement || document.body).scrollTop -
        this.canvas.height / 2) /
        this.scene.scaleY +
      this.canvas.height / 2 -
      this.scene.translateY
    );
  }
}
