function lab([arg1, arg2]) {
    let lenght = Number(arg1) * 100; //so it is in cm
    let width = Number(arg2) * 100; //so it is in cm
    let totalRows = parseInt(lenght / 120);
    let totalCols = width - 100;
    let table = parseInt(totalCols / 70)
    let numberOfSeats = totalRows * table - 3;
    console.log(numberOfSeats);
}
lab([15, 8.9])  
