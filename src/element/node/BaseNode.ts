import BaseElement from "../BaseElement";
/**
 * 节点
 */
export default abstract class BaseNode extends BaseElement {
  dragEnable: boolean = true;
  abstract x: number;
  abstract y: number;
  zIndex: number = 1;
  /**
   * 中心点位置,一般用来连线的连接点
   */
  abstract centerPoint(): [number, number];
  abstract rectCase(): [number, number, number, number];

  // centerPointAbs(): [number, number] {
  //     let point = this.centerPoint();
  //     let p = this.parent;
  //     while (p) {
  //         point[0] += p.x;
  //         point[1] += p.y;
  //         p = p.parent;
  //     }
  //     return point;
  // }
}
