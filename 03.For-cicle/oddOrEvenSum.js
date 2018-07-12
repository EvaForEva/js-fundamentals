function oddOrEvenSum(input) {
    let n = Number(input[0]);
    let sumOdd = 0;
    let sumEven = 0;
    for(let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i]);
        if(i%2 == 0) {
            sumEven = sumEven + currentNumber; 
        }else{
            sumOdd = sumOdd + currentNumber;    
        }
    }
    if(sumOdd === sumEven) {
        console.log("Yes");
        console.log("Sum = " + sumEven);
    }else{
        console.log("No");
        console.log("Diff = " + Math.abs(sumEven - sumOdd));
    }
}
oddOrEvenSum([4, 10, 50, 60, 20])