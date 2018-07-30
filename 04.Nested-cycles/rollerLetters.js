function roller() {
    for(let firstLetter = 97; firstLetter <= 122; firstLetter++) {
        for(let secondLetter = 97; secondLetter <= 122; secondLetter++) {
            for(let thirdLetter = 97; thirdLetter <= 122; thirdLetter++) {
               console.log(String.fromCharCode(firstLetter) String.fromCharCode(secondLetter) String.fromCharCode(thirdLetter)); 
            }
        }
    }
}
roller(["a", "b", "c"])