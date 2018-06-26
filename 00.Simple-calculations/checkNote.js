function calculateNote(input) {
    let grade = input[0];
    if(grade>=5.50) {
        console.log("Excellent!");
    }else {
        console.log("Not excellent");
    }
}
calculateNote([5.52])