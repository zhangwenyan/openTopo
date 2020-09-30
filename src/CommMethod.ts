import BaseElement from "./element/BaseElement";
import IElement from "./element/IElement";
import BaseContainer from "./element/node/container/BaseContainer";
import IContainer from "./IContainer";

//#TODO 如果添加很频繁,考虑索引zIndex
export function add(container: IContainer, ...eles: BaseElement[]): void {
  eles.forEach((ele) => {
    ele.parent = container;
    for (let i = 0; i < container.elements.length; i++) {
      let sele = container.elements[i];
      if (ele.zIndex < sele.zIndex) {
        container.elements.splice(i, 0, ele);
        return;
      }
    }
    container.elements.push(ele);
  });
}
export function remove(container: IContainer, ...eles: BaseElement[]): void {
  eles.forEach((ele) => {
    for (let i = 0; i < container.elements.length; i++) {
      let sourceEle = container.elements[i];
      if (ele === sourceEle) {
        container.elements.splice(i, 1);
        ele.parent = null;
        break;
      }
    }
  });
}

export function eachAllEles(container: IContainer, f: (ele: IElement) => void) {
  container.elements.forEach((ele: IElement) => {
    f(ele);
    if (ele instanceof BaseContainer) {
      eachAllEles(ele, f);
    }
  });
}
