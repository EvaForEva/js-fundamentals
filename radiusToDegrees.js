function convertToDegrees(input) {
    let rad = Number(input);
    let degree = rad * (180/Math.PI)
    console.log(Math.round(degree));
}
convertToDegrees(3.1416)