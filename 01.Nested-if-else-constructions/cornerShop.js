function cornerShop([arg1, arg2, arg3]) {
    let product = arg1.toLowerCase();
    let city = arg2.toLowerCase();
    let quantity = Number(arg3);
    if(city === "sofia") {
        if(product === "coffee") console.log(0.50 * quantity);
        if(product === "water") console.log(0.80 * quantity);
        if(product === "beer") console.log(1.20 * quantity);
        if(product === "sweets") console.log(1.45 * quantity);
        if(product === "peanuts") console.log(1.60 * quantity);
    }else if(city === "plovdiv") {
        if(product === "coffee") console.log(0.40 * quantity);
        if(product === "water") console.log(0.70 * quantity);
        if(product === "beer") console.log(1.15 * quantity);
        if(product === "sweets") console.log(1.30 * quantity);
        if(product === "peanuts") console.log(1.50 * quantity);         
    }
    else if(city === "varna") {
        if(product === "coffee") console.log(0.45 * quantity);
        if(product === "water") console.log(0.70 * quantity);
        if(product === "beer") console.log(1.10 * quantity);
        if(product === "sweets") console.log(1.35 * quantity);
        if(product === "peanuts") console.log(1.55 * quantity);         
    }
}
cornerShop ("coffee", "Varna", 2)
