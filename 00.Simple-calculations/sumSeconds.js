function sumSeconds([arg1, arg2, arg3]) {
    let firstSportsman = Number([arg1]);
    let secondSportsman = Number([arg2]);
    let thirdSportsman = Number([arg3]);
    let sumTime = Math.floor((firstSportsman + secondSportsman + thirdSportsman) / 60);
    let secs = (firstSportsman + secondSportsman + thirdSportsman) % 60;
    if (secs <= 9) {
        secs = "0" + secs;
    }
    console.log (sumTime + ":" + secs); 
}
sumSeconds([35, 45, 44])