function greaterNumber(input) {
    let firstNumber = input[0];
    let secondNumber = input[1];
    if(firstNumber>secondNumber) {
        console.log(firstNumber);
    }else if(secondNumber>firstNumber){
        console.log(secondNumber);
    }else{
        console.log("=")
    }
}
greaterNumber([5,10])