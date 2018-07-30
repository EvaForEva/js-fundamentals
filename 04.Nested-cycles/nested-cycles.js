//Numbers N to 1
function numbersNto1(args) {
    let input = Number(args[0]);
    for(let startingNumber = input; startingNumber >= 1; startingNumber--) {
        console.log(startingNumber);
    }
}
numbersNto1([100])

//Numbers 1 to N with step 3
function numbers1toN(args) {
    let n = Number(args[0]);
    for(let currentNumber = 1; currentNumber <= n; currentNumber = currentNumber + 3) {
        console.log(currentNumber)    
    }
} 
numbers1toN([10])

//Even powers of 2 - povdigane na vtora stepen
function evenPowerOf2(args) {
   let finalPower = Number(args[0]); 
    for(let currentPower = 0; currentPower <= finalPower; currentPower += 2) {
        console.log(Math.pow(2, currentPower));
    }
}
evenPowerOf2([10])

function evenPowerOf2(args) {
    let maxPower = Number(args[0]); 
    let number = 1;
    for(let currentPower = 0; currentPower <= maxPower; currentPower++) {
        console.log(number);
        number = number * 2 * 2;
    }
}
evenPowerOf2([10])

//Primer za troen vlojen cikul printirast chisla
function tripleNumbers() {
    for(let firstNumber = 0; firstNumber <= 9; firstNumber++) {
        for(let secondNumber = 0; secondNumber <= 9; secondNumber++) {
            for(let thirdNumber = 0; thirdNumber <= 9; thirdNumber++) {
                let currentNumber = ((firstNumber*100) + secondNumber*10) + thirdNumber;
                if(currentNumber % 2 === 0) {
                   console.log(currentNumber);
                }
            }
        }
    }
}
tripleNumbers()

//Roletka or bukvi asci simvoli!
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

function roller() {
    for(let firstLetter = 97; firstLetter <= 122; firstLetter++) {
        for(let secondLetter = 97; secondLetter <= 122; secondLetter++) {
            for(let thirdLetter = 97; thirdLetter <= 122; thirdLetter++) {
                if((firstLetter===secondLetter)&&(firstLetter===thirdLetter)&&(secondLetter===thirdLetter)) {
                    console.log(String.fromCharCode(firstLetter) String.fromCharCode(secondLetter) String.fromCharCode(thirdLetter)); 
                }else {
                    console.log("SAD");
                }
            }
        }
    }
}
roller()

function roller() {
    for(let firstLetter = 97; firstLetter <= 122; firstLetter++) {
        for(let secondLetter = 65; secondLetter <= 90; secondLetter++) {
            for(let thirdLetter = 33; thirdLetter <= 47; thirdLetter++) {
                if((String.fromCharCode(firstLetter)==="m") && (String.fromCharCode(secondLetter)==="A") && (String.fromCharCode(thirdLetter)==="//")){
                    console.log("You win!");
                    return
                }else {
                    console.log(String.fromCharCode(firstLetter) + "-" + String.fromCharCode(secondLetter) + "-" + String.fromCharCode(thirdLetter));
                }
            }
        }
    }
}
roller()

//Magicheski chisla - Izpizna zadacha 26.03.2016
function magicalNumbers(args) {
    let magicNumber = Number(args[0]);
    let formatString = '';
    for(let firstNumber = 1; firstNumber <= 9; firstNumber++) {
        for(let secondNumber = 0; secondNumber <= 9; secondNumber++) {
            for(let thirdNumber = 0; thirdNumber <= 9; thirdNumber++) {
                for(let forthNumber = 0; forthNumber <= 9; forthNumber++) {
                    for(let fifthNumber = 0; fifthNumber <= 9; fifthNumber++) {
                        for(let sixthNumber = 0; sixthNumber <= 9; sixthNumber++) {
                            let multiplyAllNumbers = firstNumber * secondNumber * thirdNumber * forthNumber * fifthNumber * sixthNumber;
                            if(multiplyAllNumbers === magicNumber) {
                                formatString += `${firstNumber}${secondNumber}${thirdNumber}${forthNumber}${fifthNumber}${sixthNumber} `;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(formatString);
}
magicalNumbers([2])

//Specialni chisla - Izpizna zadacha 26.04.2016
function specialNumbers(args) {
    let specialNumber = Number(args[0]);
    let formatString = '';
    for(let firstNumber = 1; firstNumber <= 9; firstNumber++) {
        for(let secondNumber = 1; secondNumber <= 9; secondNumber++) {
            for(let thirdNumber = 1; thirdNumber <= 9; thirdNumber++) {
                for(let forthNumber = 1; forthNumber <= 9; forthNumber++) {
                    if(specialNumber%firstNumber===0 && 
                       specialNumber%secondNumber===0 && 
                       specialNumber%thirdNumber===0 && 
                       specialNumber%forthNumber===0){
                        formatString += `${firstNumber}${secondNumber}${thirdNumber}${forthNumber} `;
                    }
                }
            }
        }
    }
    console.log(formatString);
}
specialNumbers([3])

//Building
function building(args) {
    let floor = Number(args[0]);
    let room = Number(args[1]);
    for(let i = floor; i >= 1; i--) {
        let print = '';
        for(let j = 0; j < room; j++) {
            if(i == floor) {
                print = print + "L" + i + j + " ";
            }else if(i%2 == 0) {
               print = print + "O" + i + j + " ";
            }
            else {
               print = print + "A" + i + j + " ";
            }
        }
        console.log(print);
    }
}
building([6,4])

//Graduation part 3* - NERESCHENA
function graduation(args) {
    let counter = 0; 
        while(input[counter] != "END") {
            let name = input[counter];
            counter++;
            let avarage = 0;
            let check = false;
            for(let i = 1; i <= 12; i++) {
                let currentGrade = Number(input[counter]);
                if(currentGrade >= 4.0) {
                    avarage = avarage + currentGrade;
                }else {
                    if(check === true) {
                       console.log(name + " has been excluded in " + i-=1 + " grade");
                        counter++;
                        break;
                    }
                    check = true;
                }
                if(i === 12) {
                    let avarage = avarage / 12;
                    console.log(name + " graduated. Avarage grade: " + avarage.toFixed(2));
                }
                counter++;
            }
        }
}
graduation(["Gosho", 5, 5, 6, 5.4, 5.6, 6, 5.7, 5, 6, 6, 5.9, 5, "Ani", 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, "END"])

//Biscuit Fabric - 90 ot 100 tochki 
function fabric(args) {
    let index = 0;
    let productCount = 0;
    let n = Number(args[index]);
    let flour = false;
    let eggs = false;
    let sugar = false;
    while(productCount < n) {
        index++;
        let currentElement = args[index];
        while(currentElement != "Bake!") {
            if(currentElement == "flour") {
                flour = true;
            }else if(currentElement == "eggs") {
                eggs = true;
            }else if(currentElement == "sugar") {
                sugar = true;
            }
            index++;
            currentElement = args[index];
        }
        if(eggs && sugar && flour) {
            productCount++;
            console.log("Baking batch number " + productCount + "...")
            let flour = false;
            let eggs = false;
            let sugar = false;
        }else {
            console.log("The batter should contain flour, eggs and sugar!")
        }
    }
}
fabric([2, "flour", "eggs", "sugar", "chocolate", "Bake!", "flour", "eggs", "sugar", "caramel", "peanuts", "Bake!"])

//Dump password generator
function dumbPassword(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let result = '';
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            for(let k = 97; k < l + 97; k++) {
                for(let p = 97; p < l + 97; p++) {
                    for(let o = 1; o <= n; o++) {
                        let firstChar = String.fromCharCode(k);
                        let secondChar =  String.fromCharCode(p);
                        if(o > i && o > j) {
                            result = result + i + j + firstChar + secondChar + o + " ";
                        }
                    }
                }
            }
        } 
    }
    console.log(result);
}
dumbPassword([2, 4])


//Matrix
function matrix(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let d = Number(input[3]);
    let num = 1;
    let result = "";
    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            for (let k = c; k <= d; k++) {
                for (let l = c; l <= d; l++) {
                    if (i + l == j + k && (i != j && k != l)) {
                        console.log(`${i}${j}`);
                        console.log(`${k}${l}`);
                        console.log('');
                    }
                }
            }
        }
    }
}
matrix([1, 2, 3, 4])

//Number Table
function numberTable(input) {
    let n = Number(input[0]);
    let num = 0;
    for(let row = 0; row < n; row++) {
        let str = " ";
        for (let col = 0; col < n; col++) {
            num = row + col + 1;
            if (num > n) {
                num = (2 * n) - num;
            }
            str += num + " ";
        }
        console.log(str);
    }
}
 numberTable([])

//Name wars
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

//Traveling
function travelling(input) {
    for (let i = 0; i <= input.length; i += 1) {
        let destination = '';
        let monthly = 0;
        let savingSum = 0;
        let budget = 0;
        if (input[i] !== 'END' && input[i] !== 'End') {
            if (isNaN(+input[i])) {
                destination = input[i];
                budget = +input[i + 1];
                for (let j = i + 2; !( isNaN(+input[j]) ); j += 1) {
                    monthly = +input[j];
                    if (monthly >= 4) {
                        savingSum += monthly;
                    }
                }
            }
        }else {
            break;
        }
        if (destination !== '') {
            if (savingSum >= budget) {
                console.log(`Going to ${destination}!`);
            }
        }
    }
}
travelling([])

//Number pyramid
function numberPyramid([arg1]) {
    let n = Number(arg1);
    let num = 1;
    let result = "";
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            if (col > 1) result += " ";
            result += num;
            num++;
            if (num > n) break;
        }
        console.log(result);
        result = "";
        if (num > n) break;
    }
}
numberPyramid([])













