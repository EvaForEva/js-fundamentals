function numberRange(input) {
    let number = input[0];
    if (number<100) {
        console.log("Number is < 100")
    } 
    if(number>5){
        console.log("Number is > 5")
    }else{
        console.log(number)
    }
}
numberRange([20])