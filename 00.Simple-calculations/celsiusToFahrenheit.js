function convertToFarenheit(input) {
    let celsius = Number(input);
    let farenheit = (celsius * 1.8) + 32;
    console.log(farenheit.toFixed(2));
}
convertToFarenheit(25)