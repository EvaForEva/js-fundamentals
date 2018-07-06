function graduation(args) {
    let name = args[0];
    let currentClass = 1;
    let sum = 0;
    let i = 1;
    while(currentClass <= 12) {
          let grade = Number(args[i]);
          
          if(grade >= 4.00) {
              sum = sum + grade;
              currentClass++; 
          }else {
              console.log(name + " has been excluded at " + currentClass + " grade");
              return;
          }
          i++;
    }
    let avarageGrade = sum / 12;
    console.log(name + " graduated. Average grade: " + avarageGrade.toFixed(2)); 
}
graduation(["Pesho", 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5])