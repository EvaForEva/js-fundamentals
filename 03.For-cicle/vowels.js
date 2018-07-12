function vowelsSum(input) {
    let str = input[0];
    let sum = 0;
    //console.log(str.length); izpechatva duljinata na stringa
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        switch(char) {
            case "a": sum = sum + 1; break;
            case "e": sum = sum + 2; break;
            case "i": sum = sum + 3; break;
            case "o": sum = sum + 4; break;
            case "u": sum = sum + 5; break;
            default: break;
        }
    }
    console.log(sum);
}
vowelsSum(["hello", "hi", "bamboo", "beer"])