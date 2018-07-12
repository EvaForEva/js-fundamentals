function maxNumbers(args) {
    let n = Number(args[0]);
    let maxNumber = Number.MIN_SAFE_INTEGER;
    for(let i = 1; i <= n; i++) {
        let currentNumber = Number(args[i]);
        if(currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
    }
    console.log(maxNumber);   
}
maxNumbers([2, 100, 99])