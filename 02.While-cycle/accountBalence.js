function accountBalance(input) {
    let numberTrans = Number(input[0]);
    let account = 0;
    let i = 1;
    let tempMoney = 0;
    while(i <= numberTrans) {
        tempMoney = Number(input[i]);
        if(tempMoney < 0) {
            console.log("Invalid operation!");
            break;
        }else {
            console.log("Your account balance was increased by: " + tempMoney.toFixed(2));
            account = account + tempMoney;
            i++;
        }
    }
    console.log("Total balance: " + account.toFixed(2));
}
accountBalance([3, 5.51, 69.42, 100])
