function TomCat(input) {
    let daysOff = Number(input);
    let playTime = (daysOff * 127) + (365 - daysOff) * 63;
    let hours = Math.trunc(Math.abs(playTime - 30000) / 60);
    let minutes = Math.abs(playTime - 30000) % 60;
    if(playTime > 30000) {
        console.log("Tom will run away");
        console.log(hours + " hours and " + minutes + " minutes more for play");
    }else {
        console.log("Tom sleeps well");
        console.log(hours + " hours and " + minutes + " minutes less for play");
    }
}
TomCat(20)