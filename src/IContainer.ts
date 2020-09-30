import BaseElement from "./element/BaseElement";
import IElement from "./element/IElement";
import BaseNode from "./element/node/BaseNode";

export default interface IContainer {
  elements: BaseElement[];
  add(...eles: BaseElement[]): void;
  remove(...eles: BaseElement[]): void;
  /**
   * 判断节点是否在容器范围内
   * @param node
   */
  nodeInBound(node: BaseNode): boolean;

  eachAllEles(f: (ele: IElement) => void): void;
}
