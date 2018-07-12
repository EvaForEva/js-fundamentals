function minNumbers(args) {
    let n = Number(args[0]);
    let minNumber = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i <= n; i++) {
        let currentNumber = Number(args[i]);
        if(currentNumber < minNumber) {
            minNumber = currentNumber;
        }
    }
    console.log(minNumber);   
}
minNumbers([2, 100, 99])