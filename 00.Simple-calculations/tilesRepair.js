function tiles([arg1, arg2, arg3, arg4, arg5]) {
    let playArea = Number(arg1) * Number(arg1);
    let widthTile = Number(arg2);
    let lengthTile = Number(arg3);
    let widthBench = Number(arg4);
    let lengthBench = Number(arg5);
    let tileArea = widthTile * lengthTile;
    let benchArea = widthBench * lengthBench;
    let totalPlayArea = playArea - benchArea;
    let needTile = totalPlayArea / tileArea;
    console.log(needTile.toFixed(2));
    let totalTime = needTile * 0.2;
    console.log(totalTime.toFixed(2));
}
tiles([20, 5, 4, 1, 2])