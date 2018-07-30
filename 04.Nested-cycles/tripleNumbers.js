function tripleNumbers() {
    for(let firstNumber = 0; firstNumber <= 9; firstNumber++) {
        for(let secondNumber = 0; secondNumber <= 9; secondNumber++) {
            for(let thirdNumber = 0; thirdNumber <= 9; thirdNumber++) {
                let currentNumber = ((firstNumber*100) + secondNumber*10) + thirdNumber;
                if(currentNumber % 2 === 0) {
                   console.log(currentNumber);
                }
            }
        }
    }
}
tripleNumbers()