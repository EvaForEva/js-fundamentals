function roller() {
    for(let firstLetter = 97; firstLetter <= 122; firstLetter++) {
        for(let secondLetter = 65; secondLetter <= 90; secondLetter++) {
            for(let thirdLetter = 33; thirdLetter <= 47; thirdLetter++) {
                if((String.fromCharCode(firstLetter)==="m") && (String.fromCharCode(secondLetter)==="A") && (String.fromCharCode(thirdLetter)==="//")){
                    console.log("You win!");
                    return
                }else {
                    console.log(String.fromCharCode(firstLetter) + "-" + String.fromCharCode(secondLetter) + "-" + String.fromCharCode(thirdLetter));
                }
            }
        }
    }
}
roller()