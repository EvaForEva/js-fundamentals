function cinema ([arg1, arg2, arg3]) {
    let type = (arg1).toLowerCase();
    let rows = parseInt(arg2);
    let columns = parseInt(arg3);
    let price = 0;
    if (type == "premiere") {price = 12;}
    if (type == "normal") {price = 7.5;}
    if (type == "discount") {price = 5;}
    console.log((rows * columns * price).toFixed(2) + " leva");
}
cinema(["Premiere", 10, 12])
