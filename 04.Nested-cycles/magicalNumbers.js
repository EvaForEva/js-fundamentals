function magicalNumbers(args) {
    let magicNumber = Number(args[0]);
    let formatString = '';
    for(let firstNumber = 1; firstNumber <= 9; firstNumber++) {
        for(let secondNumber = 0; secondNumber <= 9; secondNumber++) {
            for(let thirdNumber = 0; thirdNumber <= 9; thirdNumber++) {
                for(let forthNumber = 0; forthNumber <= 9; forthNumber++) {
                    for(let fifthNumber = 0; fifthNumber <= 9; fifthNumber++) {
                        for(let sixthNumber = 0; sixthNumber <= 9; sixthNumber++) {
                            let multiplyAllNumbers = firstNumber * secondNumber * thirdNumber * forthNumber * fifthNumber * sixthNumber;
                            if(multiplyAllNumbers === magicNumber) {
                                formatString += `${firstNumber}${secondNumber}${thirdNumber}${forthNumber}${fifthNumber}${sixthNumber} `;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(formatString);
}
magicalNumbers([2])
