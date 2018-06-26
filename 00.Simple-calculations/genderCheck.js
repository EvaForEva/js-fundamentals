function checkGender(input) {
    let gender = input[0];
    if(gender==="male") {
        console.log("I am a male");
    }else if(gender==="female") {
        console.log("I am a female");
    }else{
        console.log("Invalid input")
    }
}
checkGender(["female"])