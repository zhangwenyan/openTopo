import Base from './Base'
export default class Element extends Base {


    static _id = 0;
    #evtMaps = {}
    visible = true;
    dragEnable = true;
    selected = false;

    constructor() {
        super();
        this._id = 'Element_' + Element._id++;
    }

    inBound() {
        return false;
    }
    centerPoint() {//中心点位置
        throw new Error('un impl');
    }
    paint() {
        throw new Error('un impl');
    }

    addEventListener(type, listener) {
        if (!this.#evtMaps[type]) {
            this.#evtMaps[type] = [listener];
            return;
        }
        var evts = this.#evtMaps[type];
        for (var i = 0; i < evts.length; i++) {
            var m = evts[i];
            if (listener == m) {
                return;
            }
        }
        this.#evtMaps[type].push(listener);
    }
    removeEventListener(type, listener) {
        var evts = this.#evtMaps[type];
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
        var evts = this.#evtMaps[type];
        if (!evts) {
            return;
        }
        for (var i = 0; i < evts.length; i++) {
            var m = evts[i];
            m();
        }
    }

}