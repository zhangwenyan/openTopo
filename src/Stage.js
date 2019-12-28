import Base from './Base'

class Stage extends Base {

    getCanvasPx(evt) {
        return (evt.clientX - this.canvas.offsetLeft + (document.documentElement || document.body).scrollLeft - this.canvas.width / 2) / this.scene.scaleX + this.canvas.width / 2 - this.scene.translateX;
    }
    getCanvasPy(evt) {
        return (evt.clientY - this.canvas.offsetTop + (document.documentElement || document.body).scrollTop - this.canvas.height / 2) / this.scene.scaleY + this.canvas.height / 2 - this.scene.translateY;
    }

    constructor(canvas, width, height) {
        super();
        this.canvas = typeof (canvas) == 'string' ? document.querySelector(canvas) : canvas;
        this.width = width || this.canvas.width;
        this.height = height || this.canvas.height;

        this.scene = null;//画布

        this.ctx = this.canvas.getContext('2d');

        var me = this;
        var f = function () {
            me.tick();
            setTimeout(f);
        }
        this.tickTimes = 1;
        f();

        me.canvas.addEventListener('mousemove', function (evt) {
            if (!me.scene) {
                return;
            }
            evt = evt || event;
            var px = me.getCanvasPx(evt);
            var py = me.getCanvasPy(evt);
            me.scene.focusEle = null;
            for (var i in me.scene.elements) {
                var ele = me.scene.elements[i];
                if (ele.inBound(px, py)) {
                    if(ele!=me.scene.focusEle){
                        me.scene.focusEle = ele;
                        ele.triggerEvent('mouseover',evt);
                    }
                    return;
                }else{
                    if(ele==me.scene.focusEle){
                        ele.triggerEvent('mouseout',evt);
                        ele.triggerEvent('mouseleave',evt);
                    }
                }
            }
        });
        me.canvas.addEventListener('mousedown', function (evt) {
            if (!me.scene) {
                return;
            }
            evt = evt || event;
            var px = me.getCanvasPx(evt);
            var py = me.getCanvasPy(evt);

            var downType = 'scene';
            if (!evt.ctrlKey) {
                me.scene.elements.forEach(function (ele) {
                    ele.selected = false;
                });
            }
            for (var i in me.scene.elements) {
                var ele = me.scene.elements[i];
                if (ele.inBound(px, py)) {
                    ele.selected = true;
                    downType = 'ele';
                    ele.triggerEvent('mousedown',evt);
                    break;
                }
            }

            if (downType == 'scene') {
                me.canvas.style.cursor = 'pointer';
            } else {
                me.canvas.style.cursor = 'move';
            }
            let downPx = px;
            let downPy = py;

            var evt_mousemove = function(evt){
                evt = evt || event;
                var px = me.getCanvasPx(evt);
                var py = me.getCanvasPy(evt);
                var dx = px - downPx;
                var dy = py - downPy;
                if (downType == 'ele') {
                    downPx = px;
                    downPy = py;
                    me.scene.elements.forEach(function (ele) {
                        if (ele.selected && ele.dragEnable) {
                            ele.x += dx;
                            ele.y += dy;
                        }
                    });
                }
                else if (downType == 'scene') {
                    if (me.scene.dragEnable) {
                        me.scene.translateX += dx;
                        me.scene.translateY += dy;
                    }
                }
            }
            me.canvas.addEventListener('mousemove',evt_mousemove);
            var evt_mouseup = function(){
                me.canvas.removeEventListener('mousemove',evt_mousemove);
                document.removeEventListener('mouseup',evt_mouseup);
                me.canvas.style.cursor = 'default';
            };
            document.addEventListener('mouseup',evt_mouseup);
        })

        me.canvas.onmousewheel = function (evt) {
            if (!me.scene) {
                return;
            }
            evt = evt || event;
            if (evt.deltaY > 0) {
                me.scene.scaleY *= me.scene.wheelZoom;
                me.scene.scaleX *= me.scene.wheelZoom;
            } else {
                me.scene.scaleY /= me.scene.wheelZoom;
                me.scene.scaleX /= me.scene.wheelZoom;
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

Object.defineProperties(Stage.prototype, {
    width: {
        get: function () {
            return this._width;
        }, set: function (a) {
            this._width = a;
            this.canvas.width = this._width;
        }
    },
    height: {
        get: function () {
            return this._height;
        }, set: function (a) {
            this._height = a;
            this.canvas.height = this._height;
        }
    }
});

export default Stage;
