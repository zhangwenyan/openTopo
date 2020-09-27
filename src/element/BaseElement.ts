import IElement from "./IElement";
import BaseContainer from "./node/container/BaseContainer";

export default abstract class BaseElement implements IElement {
    selected: boolean = false;
    visible: boolean = true;
    parent: BaseContainer | null = null;
    abstract zIndex: number;
    abstract paint(ctx: CanvasRenderingContext2D, ps: { focusEle: BaseElement | null }): void;
    abstract inBound(px: number, py: number): boolean;
}