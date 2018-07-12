function leftAndRichtSum(args) {
    let n = Number(args[0]);
    let leftSum = 0;
    let rightSum = 0;
    for(let i = 1; i <= n; i++) {
        leftSum = leftSum + Number(args[i]);
        rightSum = rightSum + Number(args[i+n]);
    }
    let differenceBetweenSums = Math.abs(leftSum - rightSum);
    if(differenceBetweenSums == 0) {
        console.log("Yes, sum = " + leftSum);
    }else {
        console.log("No, diff = " + differenceBetweenSums); 
    }
}
leftAndRichtSum([2, 10, 90, 60, 40])