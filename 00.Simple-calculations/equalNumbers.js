function equalNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirddNumber = Number(input[2]);
    if(firstNumber === secondNumber && firstNumber === thirddNumber && secondNumber === thirddNumber) {
        console.log("yes");
    }else{
        console.log("no");
    }
}
equalNumbers([1, 1, 2])