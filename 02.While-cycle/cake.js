function cake(args) {
    let length = Number(args[0]);
    let width = Number(args[1]);
    let cakeSize = length * width;
    let piecesLeft = 0;
    let currentNumber = 0;
    let lengthArrey = args.length;
    let i = 0;
    while(i <= lengthArrey - 2) {
        currentNumber = args[i + 2];
        if(cakeSize >= currentNumber) {
            piecesLeft = cakeSize - currentNumber
            cakeSize = cakeSize - currentNumber
        }else if(currentNumber > cakeSize) {
            piecesLeft = cakeSize - currentNumber     
        }else if(currentNumber === "STOP") {
            break;
        }
        i++
    }
    if(piecesLeft >= cakeSize) {
        console.log(piecesLeft + " pieces are left.")
    }else {
        console.log("No more cake left! You need " + Math.abs(piecesLeft) + " pieces more.")
    }
}
cake([10, 10, 20, 20, 20, 20, 21])