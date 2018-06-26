// Point on rectangular border
function pointOnBorder([arg1, arg2, arg3, arg4, arg5, arg6]) {
    let x = Number(arg5);
    let y = Number(arg6);
    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);
    if(((x == x1 || x == x2) && (y >= y1 && y <= y2)) || ((y == y1 || y == y2) && (x >= x1 && x <= x2))) {
        console.log("Border");
    }else {
        console.log("Inside / Outside");
    }
}
pointOnBorder([2, -3, 12, 3, 8, -1])

// or
function pointOnBorder([arg1, arg2, arg3, arg4, arg5, arg6]) {
    let onLeftSide = (x == x1) && (y >= y1) && (y <=y2);
    let onRightSide = (x == x2) && (y >= y1) && (y <=y2);
    let onUpSide = (y == y1) && (x >= x1) && (x <=x2);
    let onDownSide = (y == y2) && (x >= x1) && (x <=x2);
    if() {
        console.log("Border");
    }else {
        console.log("Inside / Outside");
    }
}
pointOnBorder([2, -3, 12, 3, 8, -1])