function wordCheck([arg1, arg2]) {
    let word1 = arg1;
    let word2 = arg2;
    if (word1 === "Example" || word2 === "Demo") {
        console.log("Words are correct");
    }else {
         console.log("Words are incorrect");
    }
}
wordCheck(["Example", "Demo"])