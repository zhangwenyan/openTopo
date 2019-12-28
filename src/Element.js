import Base from './Base'
export default class Element extends Base {
    constructor() {
        super();
        this.visible = true;
        this.dragEnable = true;
        this._evtMaps = {};
    }

    inBound() {
        return false;
    }

    addEventListener(type, listener) {
        if (!this._evtMaps[type]) {
            this._evtMaps[type] = [listener];
            return;
        }
        var evts = this._evtMaps[type];
        for (var i = 0; i < evts.length; i++) {
            var m = evts[i];
            if (listener == m) {
                return;
            }
        }
        this._evtMaps[type].push(listener);
    }
    removeEventListener(type, listener) {
        var evts = this._evtMaps[type];
        if (!evts) {
            return;
        }
        for (var i = 0; i < evts.length; i++) {
            var m = evts[i];
            if (listener == m) {
                evts.splice(i, 1);
                return;
            }
        }
    }
    triggerEvent(type) {
        var evts = this._evtMaps[type];
        if (!evts) {
            return;
        }
        for (var i = 0; i < evts.length; i++) {
            var m = evts[i];
            m();
        }
    }

}