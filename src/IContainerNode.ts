import BaseElement from "./element/BaseElement";
import IElement from "./element/IElement";

export default interface IContainerNode extends IElement {
    x: number;
    y: number;
    elements: BaseElement[];
    add(...eles: BaseElement[]): void;
    remove(...eles: BaseElement[]): void;
}