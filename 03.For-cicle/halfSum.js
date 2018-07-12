function halfSumElement(input) {
    let n = Number(input[0]);
    let maxNum = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i]);
        sum = sum + currentNumber;
        if(currentNumber > maxNum) {
           maxNum = currentNumber;
        }
    }
    if((sum - maxNum) === maxNum) {
        console.log("Yes");
        console.log("Sum = " + maxNum);
    }else {
        console.log("No");
        console.log("Diff = " + Math.abs(maxNum - (sum - maxNum)));
    }
}
halfSumElement([7, 3, 4, 1, 1, 2, 12, 1])