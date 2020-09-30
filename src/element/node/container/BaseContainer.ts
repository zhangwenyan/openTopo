import BaseNode from "../BaseNode";
import BaseElement from "../../BaseElement";
import IContainer from "../../../IContainer";
import { add, remove, eachAllEles } from "../../../CommMethod";
import IElement from "../../IElement";
export default abstract class BaseContainer
  extends BaseNode
  implements IContainer {
  eachAllEles(f: (ele: IElement) => void) {
    eachAllEles(this, f);
  }
  elements: BaseElement[] = [];
  add(...eles: BaseElement[]): void {
    add(this, ...eles);
  }
  remove(...eles: BaseElement[]): void {
    remove(this, ...eles);
  }
  abstract nodeInBound(ele: BaseNode): boolean;
}
