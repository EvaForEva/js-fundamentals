function passwordGuess([arg1]) {
    let customerInput = arg1;
    if(customerInput === "s3cr3t!P@ssw0rd") {
       console.log("Welcome");
    }else{
        console.log("Wrong password!")
    }
}
passwordGuess([qwerty])