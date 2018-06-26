function lawfulAge(input){
    let startDate = input[0].split('-');
    let day = Number(startDate[0]);
    let month = Number(startDate[1]);
    let year = Number(startDate[2]);
    if(day < 10){
        day = "0" + day;
    }
    if(month<10){
        month = "0" + month;
    }
    year = year + 18;
    console.log(`${day}-${month}-${year}`);
}
lawfulAge("14-5-1998")