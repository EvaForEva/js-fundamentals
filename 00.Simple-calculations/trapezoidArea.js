function trapezoidArea(arguments) {
    let b1 = Number(arguments[0]);
    let b2 = Number(arguments[1]);
    let h = Number(arguments[2]);
    let area = (b1 + b2) * h /2;
    console.log("Trapezoid area is: " + area);
}
trapezoidArea([2, 2, 4])