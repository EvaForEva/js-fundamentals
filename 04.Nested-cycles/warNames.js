function nameWars(input) {
    let index = 0;
    let name = input[index]
    let winnerName = "";
    let winnerScore = 0;
    while(name  != "STOP") {
        let sum = 0
        for(let i = 0; i < name.length; i++) {
            sum += name[i].charCodeAt()
        }
        if(sum > winnerScore){
            winnerScore = sum;
            winnerName = name;
        }
        index++;
        name = input[index];
    }
    console.log(`Winner is ${winnerName} - ${winnerScore}! `)
}
nameWars(["Anton", "Max"])