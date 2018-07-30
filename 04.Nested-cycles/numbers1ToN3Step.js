function numbers1toN(args) {
    let n = Number(args[0]);
    for(let currentNumber = 1; currentNumber <= n; currentNumber = currentNumber + 3) {
        console.log(currentNumber)    
    }
} 
numbers1toN([10])