
 /**
  * @param {*} xorp 当只有两个参数时,表示第一个点坐标对象,有四个参数时,表示第一个点横坐标
  * @param {*} yorp 当只有两个参数时,表示第二个点坐标对象,有四个参数时,表示第一个点纵坐标
  * @param {*} x1 可选,第二个点横坐标
  * @param {*} y1 可选,第二个点纵坐标
  */
export function getDistance(xorp, yorp, x1, y1) {
    let dx, dy;
    x1 == null ? (dx = yorp.x - xorp.x, dy = yorp.y - xorp.y) : (dx = x1 - xorp, dy = y1 - yorp);
    return Math.sqrt(dx * dx + dy * dy);
}