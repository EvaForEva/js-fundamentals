function fruitShop([arg1, arg2, arg3]) {
    let fruit = arg1;
    let day = arg2.toLowerCase();
    let quantity = Number(arg3);
    if(day === "saturday" || day === "sunday") {
        if(fruit === "banana") console.log(2.70 * quantity);
        if(fruit === "apple") console.log(1.25 * quantity); 
        if(fruit === "orange") console.log(0.90 * quantity);
        if(fruit === "grapefruit") console.log(1.60 * quantity);
        if(fruit === "kiwi") console.log(3.00 * quantity);
        if(fruit === "pineapple") console.log(5.60 * quantity);
        if(fruit === "grapes") console.log(4.20 * quantity);
    }else if(day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
        if(fruit === "banana") console.log(2.50 * quantity);
        if(fruit === "apple") console.log(1.20 * quantity); 
        if(fruit === "orange") console.log(0.85 * quantity);
        if(fruit === "grapefruit") console.log(1.45 * quantity);
        if(fruit === "kiwi") console.log(2.70 * quantity);
        if(fruit === "pineapple") console.log(5.50 * quantity);
        if(fruit === "grapes") console.log(3.85 * quantity);         
    }
}
fruitShop(["apple", "Tuesday", 2])