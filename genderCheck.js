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
checkGender(["female"])

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

// Izpitna zadacha Price for transportation
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

// Sum seconds - na polovina reshena
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

// Metric Converter - PITAI ILIYAN
function metricConverter([arg1, arg2, arg3]) {
    let digit = Number([arg1]);
    let sourceMetrics = arg2.toLowerCase();
    let destinationMetrics = arg3.toLowerCase();
    if(sourceMetrics === "km") {
        digit = digit / 0.001;
    }
    if(sourceMetrics === "ft") {
        digit = digit * 3.2808399;
    }
    if(sourceMetrics === "in") {
        digit = digit * 39.3700787;    
    }
    if(sourceMetrics === "mi") {
        digit = digit / 0.000621371192;    
    }
    if(sourceMetrics === "cm") {
        digit = digit * 100;    
    }
    if(sourceMetrics === "mm") {
        digit = digit * 1000;    
    }
    
    if(destinationMetrics === "km") {
        digit = digit * 0.001;
    }
    if(destinationMetrics === "ft") {
        digit = digit / 3.2808399;
    }
    if(destinationMetrics === "in") {
        digit = digit / 39.3700787;    
    }
    if(destinationMetrics === "mi") {
        digit = digit * 0.000621371192;    
    }
    if(destinationMetrics === "cm") {
        digit = digit / 100;    
    }
    if(destinationMetrics === "mm") {
        digit = digit / 1000;    
    } 
    console.log(digit + " " + destinationMetrics.toFix(8));
}
metricConverter([12, "km", "ft"])

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

// Speed info - nesto samo 88 tochki...
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

// Lice na figuri - 75 tochki samo
function areaOfFigures(input) {
    let type = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let area = 0;
    if(type === "square") {
    area=a*a;
    }else if(type === "rectangular") {
    area=a*b;     
    }else if(type === "circle") {
    area=Math.PI*a*a;     
    }else if(type === "triangle") {
    area=(a*b)/2;     
    }
    console.log(area.toFixed(3));
}
areaOfFigures(["rectangular", 5, 2.5])

// Time + 15 min

// Ste printira segashnoto vreme + 15 minuti otgore
function timePlus15(input) {
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let minutesPlus15 = minutes + 15;
    if(minutes < 10) {
        minutes="0" + minutes; 
    }
        console.log(hours + ":" + minutesPlus15);
}
timePlus15([1, 46])

// Ste printira zadadeno ot potrebitelia vreme + 15 minuti         
function timePlus15(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let minutesPlus15 = minutes + 15;
    if(minutes < 10) {
        minutes="0" + minutes; 
    }
        console.log(hours + ":" + minutesPlus15);
}
timePlus15([1, 46])

