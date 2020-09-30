import IContainer from "../IContainer";

export default interface IElement {
  /**
   * 是否被选中
   */
  selected: boolean;
  /**
   * 是否可见
   */
  visible: boolean;
  /**
   * 父节点
   */
  parent: IContainer | null;
  /**
   * 优先等级,数值越高越在上面
   */
  zIndex: number;
  /**
   * 在画布上绘制方法
   * @param ctx
   * @param ps
   */
  paint(ctx: CanvasRenderingContext2D, ps: { focusEle: IElement | null }): void;
  /**
   * 判断点是否在该元素范围内
   * @param px
   * @param py
   */
  inBound(px: number, py: number): boolean;
}
