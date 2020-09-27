# 使用文档

## 快速使用
```js
var ot = window.opentopo
var scene = new ot.Scene();//创建一个场景对象
var stage = new ot.Stage('myCanvas',scene,600,800);//创建一个舞台对象,并将放置场景对象

var rect = new ot.Rect('rect1');//创建一个矩形
rect.x = 100; //设置矩形位置坐标
rect.y = 200;
rect.width = 50;
rect.height = 50;
scene.add(node);//放入到场景中

```

