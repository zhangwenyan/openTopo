import ot from "..";

var scene = new ot.Scene();
var stage = new ot.Stage("myCanvas", scene, 800, 600);

var rect1 = new ot.Rect("rect1", 100, 100);

var rect2 = new ot.Rect("rect2", 10, 10);

var rect3 = new ot.Rect("rect3", 100, 200);

scene.add(rect1, rect2, rect3);
