import IContainer from "../IContainer";
import IElement from "./IElement";

export default abstract class BaseElement implements IElement {
  selected: boolean = false;
  visible: boolean = true;
  parent: IContainer | null = null;
  abstract zIndex: number;
  abstract paint(
    ctx: CanvasRenderingContext2D,
    ps: { focusEle: IElement | null }
  ): void;
  abstract inBound(px: number, py: number): boolean;
}
