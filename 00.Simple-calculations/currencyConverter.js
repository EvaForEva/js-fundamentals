function internationalCurrencyConverter([arg1, arg2, arg3]) {
    let digit = Number([arg1]);
    let sourceCurrency = arg2.toUpperCase();
    let destinationCurrency = arg3.toUpperCase();
    if(sourceCurrency === "BGN") {
        digit = digit;
    }
    if(sourceCurrency === "USD") {
        digit = digit * 1.79549;
    }
    if(sourceCurrency === "EUR") {
        digit = digit * 1.95583;
    }
    if(sourceCurrency === "GBP") {
        digit = digit * 2.53405;
    }

    if(destinationCurrency === "BGN") {
        digit = digit;
    }
    if(destinationCurrency === "USD") {
        digit = digit / 1.79549;
    }
    if(destinationCurrency === "EUR") {
        digit = digit / 1.95583;
    }
    if(destinationCurrency === "GBP") {
        digit = digit / 2.53405;
    }
    let outcome = digit.toFixed(2);
    console.log(outcome + " " + destinationCurrency);
}
internationalCurrencyConverter([20, "USD", "BGN"])