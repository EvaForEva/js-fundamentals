function vegetableExport([arg1, arg2, arg3, arg4]) {
    let pricePerKgVeg = Number(arg1);
    let pricePerKgFr = Number(arg2);
    let sumKgVeg = Number(arg3);
    let sumKgFr  = Number(arg4);
    let totalSum = (pricePerKgVeg * sumKgVeg) + (pricePerKgFr * sumKgFr);
    let convertSumEUR = totalSum / 1.94;
    console.log(convertSumEUR.toFixed(2));
}
vegetableExport([0.194, 19.4, 10, 10])
    