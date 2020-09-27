/**
 * @param {*} xorp 当只有两个参数时,表示第一个点坐标对象,有四个参数时,表示第一个点横坐标
 * @param {*} yorp 当只有两个参数时,表示第二个点坐标对象,有四个参数时,表示第一个点纵坐标
 * @param {*} x1 可选,第二个点横坐标
 * @param {*} y1 可选,第二个点纵坐标
 */
export function getDistance(xorp: any, yorp: any, x1?: number, y1?: number) {
    let dx, dy;
    (x1 && y1) ? (dx = x1 - xorp, dy = y1 - yorp) : (dx = yorp[0] - xorp[0], dy = yorp[1] - xorp[1]);
    return Math.sqrt(dx * dx + dy * dy);
}