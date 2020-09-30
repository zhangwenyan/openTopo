import ot from "../src/index";
var scene = new ot.Scene();
var stage = new ot.Stage("#myCanvas", scene, 800, 600);

var rect1 = new ot.Rect("rect1", 100, 100);

var rect2 = new ot.Rect("rect2", 10, 10);

var rect3 = new ot.Rect("rect3", 100, 100);

var link1 = new ot.Link(rect1, rect2);

var rc1 = new ot.RectContainer("rc1", 200, 200);
rc1.add(rect3);
scene.add(rect1, rect2, link1, rc1);

declare const window: any;
window.stage = stage;
