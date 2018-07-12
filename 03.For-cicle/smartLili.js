function smartLili(input) {
  let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToys = Number(input[2]);
    let savedMoney = 0;
    let saveToys = 0;
    let counter = 0;
    let sum = 0;
    for(let i = 1; i <= age; i++) {
        if(i%2 == 0) {
            counter++;
            savedMoney = (savedMoney + 10);
            sum = sum + savedMoney;
        }else {
            saveToys++; 
        }
    }
    let sumOfToy = saveToys * priceToys;
    sum = sum + sumOfToy;
    sum = sum - counter;
    if(sum >= priceWashingMachine) {
        console.log("Yes! " + (sum - priceWashingMachine).toFixed(2));
    }else {
        console.log("No! " + (priceWashingMachine - sum).toFixed(2));
    }
}  
smartLili(input)