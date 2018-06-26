function checkNumberVar(input) {
    let isValid = (input > 10) && (input%2 == 0);
    if(!isValid) {
        console.log("invalid");  
    }
}
checkNumberVar(4)