function equalPairs(input) {
    let n = Number(input[0]);
    let maxDiff = 0;
    let diff = 0;
    let sum = Number(input[1]) + Number(input[2]);
    for(let i = 3; i <= n * 2; i+=2) {
        let firstNum = Number(input[i]);
        let secondNum = Number(input[i+1]);
        let tempSum = firstNum + secondNum;
        if(sum !== tempSum) {
            diff = Math.abs(sum - tempSum);
            if(diff > maxDiff) {
                maxDiff = diff;
            }
        }
        sum = tempSum;
    }
    if(maxDiff === 0) {
        console.log("Yes, value = " + sum);
    }else {
        console.log("No, maxDiff = " + maxDiff);
    }
}
equalPairs([3, 1, 2, 0, 3, 4, -1])