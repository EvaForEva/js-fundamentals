// ASSCI Symbols - tablica sus stoinosti

function test() {
    let a = 20;
    let b = 2*10;
    if(a>b) {
        console.log("a<b")
    }else if(a===b) {
        console.log("a=b")
    }else{
        console.log("b<a")
    }
}
test()

// Chetene na ocenka otlichen
function calculateNote(input) {
    let grade = input[0];
    if(grade>=5.50) {
        console.log("Excellent!");
    }else {
        console.log("Not excellent");
    }
}
calculateNote([5.52])

// Chetene na pola
function checkGender(input) {
    let gender = input[0];
    if(gender==="male") {
        console.log("I am a male");
    }else if(gender==="female") {
        console.log("I am a female");
    }else{
        console.log("Invalid input")
    }
}
checkGender(["female7497"])

// Proverka na odd or even - chetno ili nechetno chislo
function number(input) {
    let digit = input[0];
    if(digit%2!==0) {
        console.log("odd")
    }else {
        console.log("even")
    }
}
number([5])

// Greater number
function greaterNumber(input) {
    let firstNumber = input[0];
    let secondNumber = input[1];
    if(firstNumber>secondNumber) {
        console.log(firstNumber);
    }else if(secondNumber>firstNumber){
        console.log(secondNumber);
    }else{
        console.log("=")
    }
}
greaterNumber([5,10])

function greaterNumber(input) {
    let firstNumber = input[0];
    let secondNumber = input[1];
    console.log(Math.max(firstNumber,secondNumber))
}
greaterNumber([5,10])

// Number in range
function numberRange(input) {
    let number = input[0];
    if (number<100) {
        console.log("Number is < 100")
    } 
    if(number>5){
        console.log("Number is > 5")
    }else{
        console.log(number)
    }
}
numberRange([20])

function test() {
    let number = 5;
    if(true) {
        let numberInIf = 10;
        console.log(numberInIf + " i am in");
    }
}
test()

// Zadacha Bonus tochki
function bonusPoints(input) {
    let number = Number(input[0]);
    let sum = 0;
    if(number<=100){
    sum=number+5;
    }else if(number>100 && number<=1000){
    sum=(number*0.20)+number;
    }else{
    sum=(number*0.10)+number;
    }
    if(number%2===0) {
    sum=sum+1;
    }else if(number%10===5) {
    sum=sum+2;
    }
    let bonus = sum-number;
    console.log(bonus);
    console.log(sum)
}
bonusPoints([25])

// Izpitna zadacha Price for transportation - kachila sum ia
function priceForTransportation(input) {
    let km = Number(input[0]);
    let shift = input[1];
    let sum = 0;
    //taxi
    if(km<20) {
        if(shift==="day") {
            sum=0.70+(km*0.79);
        }else if(shift==="night") {
            sum=0.70+(km*0.90);
        }
    }
    //bus
    else if(km>=20 && km<100) {
        sum=km*0.09
    }
    //train
    else if(km>=100) {
        sum=km*0.06
    }
    console.log(sum.toFixed(2))
} 
priceForTransportation([5, "day"])

// Izpisvane na chislo do 10 s dumi
function numberToText(input) {
    let number = parseInt(input);
    if(number===1){
        console.log("one");
    }else if(number===2){
        console.log("two");
    }else if(number===3){
        console.log("three");
    }else if(number===4){
        console.log("four");
    }else if(number===5){
        console.log("five");
    }else if(number===6){
        console.log("six");
    }else if(number===7){
        console.log("seven");
    }else if(number===8){
        console.log("eight");
    }else if(number===9){
        console.log("nine");
    }else{
        console.log("number too big");
    } 
}
numberToText([9])

// Password guess
function passwordGuess([arg1]) {
    let customerInput = arg1;
    if(customerInput === "s3cr3t!P@ssw0rd") {
       console.log("Welcome");
    }else{
        console.log("Wrong password!")
    }
}
passwordGuess([qwerty])

// Number 100...200
function checkNumbers100To200(input) {
    let number = Number(input);
    if(number<100) {
       console.log("Less than 100");
    }else if(number>=100 && number<=200) {
        console.log("Between 100 and 200");     
    }else if(number>200) {
        console.log("Greater than 200");     
    }
}
checkNumbers100To200(123)

// Equal words
function equalWords([arg1, arg2]) {
    let firstWord = arg1.toLowerCase();
    let secondWord = arg2.toLowerCase();
    if(firstWord === secondWord) {
        console.log("yes")
    }else{
        console.log("no")
    }
}
equalWords(["Hello", "Hello"])

// Equal numbers
function equalNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirddNumber = Number(input[2]);
    if(firstNumber === secondNumber && firstNumber === thirddNumber && secondNumber === thirddNumber) {
        console.log("yes");
    }else{
        console.log("no");
    }
}
equalNumbers([1, 1, 2])

// Metric Converter
function metricConverter([arg1, arg2, arg3]) {
    let digit = Number([arg1]);
    let sourceMetrics = arg2.toLowerCase();
    let destinationMetrics = arg3.toLowerCase();
    if(sourceMetrics === "km") {
        digit = digit * 1000;
    }
    if(sourceMetrics === "ft") {
        digit = digit / 3.2808399;
    }
    if(sourceMetrics === "in") {
        digit = digit / 39.3700787;    
    }
    if(sourceMetrics === "mi") {
        digit = digit * 1609.344;    
    }
    if(sourceMetrics === "cm") {
        digit = digit / 100;    
    }
    if(sourceMetrics === "mm") {
        digit = digit / 1000;    
    }
    if(sourceMetrics === "yd") {
        digit = digit / 1.0936133;    
    }
    if(destinationMetrics === "km") {
        digit = digit / 1000;
    }
    if(destinationMetrics === "ft") {
        digit = digit * 3.2808399;
    }
    if(destinationMetrics === "in") {
        digit = digit * 39.3700787;    
    }
    if(destinationMetrics === "mi") {
        digit = digit / 1609.344;    
    }
    if(destinationMetrics === "cm") {
        digit = digit * 100;    
    }
    if(destinationMetrics === "mm") {
        digit = digit * 1000;    
    }
    if(destinationMetrics === "yd") {
        digit = digit * 1.0936133;    
    }
    let outcome = digit.toFixed(8);
    console.log(outcome);
}
metricConverter([12, "km", "ft"])

// Sum seconds - NA POLOVINA RESHENA
function sumSeconds([arg1, arg2, arg3]) {
    let firstSportsman = Number([arg1]);
    let secondSportsman = Number([arg2]);
    let thirdSportsman = Number([arg3]);
    let secs = firstSportsman + secondSportsman +thirdSportsman;
    let mins = 0;
    if(secs > 59) {
        mins++; secs = secs - 60;
    }else if(secs > 120) {
        mins+2; secs = secs - 120;     
    }
    if(secs < 10) {
        console.log(mins + ":" + "0" + secs);
    }else{
        console.log(mins + ":" + secs);
    }
}
sumSeconds([35, 45, 44])

// Speed info - nesto samo 88 tochki...NERESHENA
function speedInfo(input) {
    let speed = Number(input);
    if(speed <= 10) {
        console.log("slow");
    }else if(speed > 10 && speed < 50) {
        console.log("average");
    }else if(speed > 50 && speed < 150) {
        console.log("fast");
    }else if(speed > 150 && speed < 1000) {
        console.log("ultra fast");
    }else if(speed > 1000) {
        console.log("extremely fast");
    }
}
speedInfo(49.5)

// Lice na figuri 
/*function areaOfFigures(input) {
    let type = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let area = 0;
    if(type === "square") {
    area=a*a;
    }
    if(type === "rectangular") {
    area=a*b;     
    }
    if(type === "circle") {
    area=Math.PI*a*a;     
    }
    if(type === "triangle") {
    area=(a*b)/2;     
    }
    console.log(area.toFixed(3));
}
areaOfFigures(["rectangular", 5, 2.5])*/

function areaOfFigures(input) {
    let type = input[0];
    if(type === "square"){
        let a = Number(input[1])
            console.log((a*a).toFixed(3));
    }else if(type === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        console.log((a*b).toFixed(3));
    }else if(type === "circle"){
        let r = Number(input[1]);
        console.log((Math.PI*r*r).toFixed(3))
    }else {
        let a = Number(input[1]);
        let b = Number(input[2]);
            console.log(((a*b)/2).toFixed(3))
    }
}
areaOfFigures(["rectangular", 5, 2.5])

// Time + 15 min
/*function timePlus15(input) {
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let minutesPlus15 = minutes + 15;
    if(minutes < 10) {
        minutes="0" + minutes; 
    }
        console.log(hours + ":" + minutesPlus15);
}
timePlus15([1, 46])*/
function timePlus15(input) {
   let h = Number(input[0]);
   let min = Number(input[1]);
   let sumOfMin = min + 15;
   if(sumOfMin >= 60){
        h += 1;
        min = sumOfMin - 60
   }else if (sumOfMin < 60){
        min = totalM;
   }
   if(min< 10){
        min = "0" + m;
   }
   if(h > 23){
        h -= 24
   }
   console.log(`${h}:${min}`);
}
timePlus15([1, 46])


// Trubi v basein
function pipesInSwimmingpool([arg1, arg2, arg3, arg4]) {
    let volumePool = Number([arg1]);
    let firstPipe = Number([arg2]);
    let secondPipe = Number([arg3]);
    let hours = Number([arg4]);
    let sumPipes = (firstPipe + secondPipe) * hours;
    let sumPipesPrt = Math.floor((sumPipes / volumePool) * 100);
    let firstPipeDiff = Math.abs((sumPipes - (firstPipe * hours)) - sumPipes);
    let firstPipeInPrt = Math.floor((firstPipeDiff / sumPipes) * 100);
    let secondPipeDiff = Math.abs((sumPipes - (secondPipe * hours)) - sumPipes);
    let secondPipeInPrt = Math.floor((secondPipeDiff / sumPipes) * 100);
    if(sumPipes <= volumePool) {
       console.log("The pool is " + sumPipesPrt + "% " + "full. Pipe 1: " + firstPipeInPrt + "%. Pipe 2: " + secondPipeInPrt + "%.");
    }else{
      console.log("For " + hours + "hours the pool overflows with " + sumPipes + "liters.");
    }
}
pipesInSwimmingpool([1000, 100, 120, 3])

// Pospalivata kotka Tom - samo 41 tochki zasega...
function TomCat(input) {
    let daysOff = Number(input);
    let workDays = 365 - daysOff;
    let playOnDaysOff = daysOff * 127;
    let playOnWorkDays = workDays * 63;
    let playNorm = 30000;
    let realPlayTime = playOnDaysOff + playOnWorkDays;
    let minutes = (playNorm - realPlayTime) % 60;
    let hours = Math.abs((playNorm - realPlayTime) / 60);
    if(playNorm < realPlayTime) {
        console.log("Tom will run away");
        console.log(hours + " hours and " + minutes + " minutes more less play");
    }else if(playNorm > realPlayTime) {
        console.log("Tom sleeps well");
        console.log(hours + " hours and " + minutes + " minutes less for play");  
    }
}
TomCat(20)