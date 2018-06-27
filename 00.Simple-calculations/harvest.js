function harvest([arg1, arg2, arg3, arg4]) {
    let wineYardArea = Number(arg1);
    let grapePerSquareMeter = Number(arg2);
    let neededLiters = Number(arg3);
    let numberOfWorkers = Number(arg4);
    let totalGrape = wineYardArea * grapePerSquareMeter;
    let wine = (totalGrape / 2.5) * 0.4;
    let wineLeftover = wine - neededLiters;
    let winePerWorker = wineLeftover / numberOfWorkers;
    if(wine < neededLiters) {
        console.log("It will be a tough winter! More " + Math.floor(neededLiters - wine) + " liters wine needed.")
    }else if(wine > neededLiters) {
        console.log("Good harvest this year! Total wine: " + Math.floor(wine) + " liters.")
        console.log(Math.ceil(wineLeftover) + " liters left -> " + Math.ceil(winePerWorker) + " liters per person.");
    }
}
harvest([650, 2, 175, 3])