# 使用文档

## 快速使用
```js
var OT = window.OpenTopo
var canvas = document.getElementById('canvas');
var stage = new OT.Stage(canvas); //创建一个舞台对象
var scene = new OT.Scene(stage); //创建一个场景对象


var rect = new OT.Rect();//创建一个矩形
rect.x = 100; //设置矩形位置坐标
rect.y = 200;
rect.width = 50;
rect.height = 50;
scene.add(node);//放入到场景中

```

