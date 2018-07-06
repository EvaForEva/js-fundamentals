function waterDispenser(input) {
    let ml = Number(input[0]);
    let totalWater = 0;
    let i = 1;
    let counter = 0;
    let button = input[i];
    while(ml > 0) {
        switch(button) {
            case "Easy": ml = ml - 50; break;
            case "Medium": ml = ml - 100; break;
            case "Hard": ml = ml - 200; break;
            default: break;
        }
        i++;
        button = input[i];
        counter++;
    }
    if(ml === 0) {
        console.log("The dispenser has been tapped " + counter + " times.");      
    }else {
        console.log(Math.abs(ml) + "ml has been spilled.")     
    }
}
waterDispenser([500, "Hard", "Medium", "Easy", "Easy", "Medium"])