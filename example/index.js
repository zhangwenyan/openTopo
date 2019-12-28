import ot from '../src/index'


let canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
let stage = new ot.Stage(canvas);
let scene = new ot.Scene(stage);

let rect = new ot.Rect("tt",200,100);
let rect1 = new ot.Rect('rect1',200,200);

let link = new ot.Link(rect,rect1);

scene.add(rect,rect1,link);

