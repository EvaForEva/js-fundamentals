function numbersNto1(args) {
    let input = Number(args[0]);
    for(let startingNumber = input; startingNumber >= 1; startingNumber--) {
        console.log(startingNumber);
    }
}
numbersNto1([100])