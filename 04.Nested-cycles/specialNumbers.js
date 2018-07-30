function specialNumbers(args) {
    let specialNumber = Number(args[0]);
    let formatString = '';
    for(let firstNumber = 1; firstNumber <= 9; firstNumber++) {
        for(let secondNumber = 1; secondNumber <= 9; secondNumber++) {
            for(let thirdNumber = 1; thirdNumber <= 9; thirdNumber++) {
                for(let forthNumber = 1; forthNumber <= 9; forthNumber++) {
                    if(specialNumber%firstNumber===0 && 
                       specialNumber%secondNumber===0 && 
                       specialNumber%thirdNumber===0 && 
                       specialNumber%forthNumber===0){
                        formatString += `${firstNumber}${secondNumber}${thirdNumber}${forthNumber} `;
                    }
                }
            }
        }
    }
    console.log(formatString);
}
specialNumbers([3])