function convertToBgn(input) {
    let dollar = Number(input);
    let lev = dollar * 1.79549
    console.log(lev.toFixed(2));
}
convertToBgn(20)