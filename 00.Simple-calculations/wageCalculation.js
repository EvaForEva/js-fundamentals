function win(input){
    let days = input[0];
    let wage = input[1];
    let dollarRate = input[2];
    let monthlySalaryInDollars = days*wage;
    let annualSalary = monthlySalaryInDollars*(12+2.5);
    let netAnnualSalary = annualSalary-(annualSalary*0.25);
    let netAnnualSalaryInLeva = netAnnualSalary*dollarRate
    let dailyRateInLeva = netAnnualSalaryInLeva/365;
    console.log(dailyRateInLeva.toFixed(2));
}
win([21, 75.00, 1.59])
