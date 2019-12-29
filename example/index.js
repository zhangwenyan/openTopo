import ot from '../src/index'


import human_src from '../example/human.png';
let canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
let stage = new ot.Stage(canvas);
let scene = new ot.Scene(stage);

let rect = new ot.Rect("tt", 200, 100);
let rect1 = new ot.Rect('rect1', 200, 200);
rect.image = human_src

window.rect = rect;

let circle = new ot.Circle("circle1", 100, 100);
let link = new ot.Link(rect, rect1);

let link1 = new ot.Link(rect1, circle);

let c = new ot.RectContainer({ x: 100, y: 100, width: 100, height: 100 });

scene.add(rect, rect1, link, circle, link1,c);


window.ot = ot;
window.stage = stage;


