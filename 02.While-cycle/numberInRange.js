function numberInRange(args) {
    let i = 0; // za da zapochnem ot nulevia masiv, toest ot 1-vata stoinost na masiva
    let number = Number(args[i]);
    while(number < 1 || number > 100) {
        i++;
        console.log("Invalid number!");
        number = Number(args[i]); // vzimame sledvastia nomer i proveri boolevata stoinost
    }
    console.log("The number is: " + number);
}
numberInRange([1000, 52, 27, 102]);