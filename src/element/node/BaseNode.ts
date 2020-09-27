import BaseElement from "../BaseElement";

export default abstract class BaseNode extends BaseElement {
    dragEnable: boolean = true;
    abstract x: number;
    abstract y: number;
    zIndex: number = 1;
    abstract centerPoint(): [number, number];
    abstract rectCase(): [number, number, number, number];
    centerPointAbs(): [number, number] {
        let point = this.centerPoint();
        let p = this.parent;
        while (p) {
            point[0] += p.x;
            point[1] += p.y;
            p = p.parent;
        }
        return point;
    }
}