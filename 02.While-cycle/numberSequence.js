function numberSequence(args) {
    let smallest = Number.MAX_SAFE_INTEGER; //dava maximalnata stoinost na chisloto
    let biggest = Number.MIN_SAFE_INTEGER;//dava minimalnata stoinost na chisloto
    let i = 0;
    while(true) {
        let command = args[i]; //minava prez vsichki argumenti i chaka komanda
        if(command === "END") {
            break;  
        }
        let num = Number(command);
        if(num < smallest) {
            smallest = num;
        }
        if(num > biggest) {
            biggest = num;
        }
        i++;
    }
    console.log("Max number: " + biggest);
    console.log("Min number: " + smallest);
}
numberSequence([10, 20, 304, 0, 50, "END"])