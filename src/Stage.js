import Base from './Base'

class Stage extends Base {

    //获取鼠标点击canvas所在相对位置
    getCanvasPx(evt) {
        return (evt.clientX - this.canvas.offsetLeft + (document.documentElement || document.body).scrollLeft - this.canvas.width / 2) / this.scene.scaleX + this.canvas.width / 2 - this.scene.translateX;
    }
    getCanvasPy(evt) {
        return (evt.clientY - this.canvas.offsetTop + (document.documentElement || document.body).scrollTop - this.canvas.height / 2) / this.scene.scaleY + this.canvas.height / 2 - this.scene.translateY;
    }

    get width() {
        return this._width;
    }

    set width(val) {
        this.canvas.width = this._width = val;
    }

    get height() {
        return this._height;
    }

    set height(val) {
        this.canvas.height = this._height = val;
    }

    scene = null;//画布

    constructor(canvas, width, height) {
        super();
        this.canvas = typeof (canvas) == 'string' ? document.querySelector(canvas) : canvas;
        this.width = width || this.canvas.width;
        this.height = height || this.canvas.height;
        this.ctx = this.canvas.getContext('2d');

        let that = this;
        let f = function () {
            that.tick();
            requestAnimationFrame(f);
        }
        f();

        that.canvas.addEventListener('mousemove', function (evt) {
            if (!that.scene) {
                return;
            }
            evt = evt || event;
            var px = that.getCanvasPx(evt);
            var py = that.getCanvasPy(evt);
            that.scene.focusEle = null;
            for (var i in that.scene.elements) {
                var ele = that.scene.elements[i];
                if (ele.inBound(px, py)) {
                    if (ele != that.scene.focusEle) {
                        that.scene.focusEle = ele;
                        ele.triggerEvent('mouseover', evt);
                    }
                    return;
                } else {
                    if (ele == that.scene.focusEle) {
                        ele.triggerEvent('mouseout', evt);
                        ele.triggerEvent('mouseleave', evt);
                    }
                }
            }
        });
        that.canvas.addEventListener('mousedown', function (evt) {
            if (!that.scene) {
                return;
            }
            evt = evt || event;
            var px = that.getCanvasPx(evt);
            var py = that.getCanvasPy(evt);

            var downType = 'scene';
            if (!evt.ctrlKey) {
                that.scene.elements.forEach(function (ele) {
                    ele.selected = false;
                });
            }
            for (var i in that.scene.elements) {
                var ele = that.scene.elements[i];
                if (ele.inBound(px, py)) {
                    ele.selected = true;
                    downType = 'ele';
                    ele.triggerEvent('mousedown', evt);
                    break;
                }
            }

            if (downType == 'scene') {
                that.canvas.style.cursor = 'pointer';
            } else {
                that.canvas.style.cursor = 'move';
            }
            let downPx = px;
            let downPy = py;

            var evt_mousemove = function (evt) {
                evt = evt || event;
                var px = that.getCanvasPx(evt);
                var py = that.getCanvasPy(evt);
                var dx = px - downPx;
                var dy = py - downPy;
                if (downType == 'ele') {
                    downPx = px;
                    downPy = py;
                    that.scene.elements.forEach(function (ele) {
                        if (ele.selected && ele.dragEnable) {
                            ele.x += dx;
                            ele.y += dy;
                        }
                    });
                }
                else if (downType == 'scene') {
                    if (that.scene.dragEnable) {
                        that.scene.translateX += dx;
                        that.scene.translateY += dy;
                    }
                }
            }
            that.canvas.addEventListener('mousemove', evt_mousemove);
            var evt_mouseup = function () {
                that.canvas.removeEventListener('mousemove', evt_mousemove);
                document.removeEventListener('mouseup', evt_mouseup);
                that.canvas.style.cursor = 'default';
            };
            document.addEventListener('mouseup', evt_mouseup);
        })

        that.canvas.onmousewheel = function (evt) {
            if (!that.scene) {
                return;
            }
            evt = evt || event;
            if (evt.deltaY > 0) {
                that.scene.scaleY *= that.scene.wheelZoom;
                that.scene.scaleX *= that.scene.wheelZoom;
            } else {
                that.scene.scaleY /= that.scene.wheelZoom;
                that.scene.scaleX /= that.scene.wheelZoom;
            }
        }
    }

    tick() {
        if (!this.scene) {
            return;
        }
        var now = new Date();
        var fps = parseInt(1000 / (now - this.lastTime));
        this.lastTime = now;
        if (this.tickTimes++ % 20 == 0) {
            //this.scene.text = "FPS:" + fps;
        }
        this.scene.text = "FPS:" + fps + '  ' + this.canvas.style.cursor;
        this.scene.paint(this.ctx);
    }

}


export default Stage;
