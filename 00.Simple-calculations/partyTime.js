function partyTime(input){
    let dateArr = input[0].split('-');
    let date = new Date(dateArr[2],Number(dateArr[1])-1,Number(dateArr[0]));
    let dateInText = date.toDateString();
    let dayArr = dateInText.split(" ");
    let day = dayArr[0];
     if(day === "Sat"){
         console.log('Party night! Today is: Saturday')
     }else if(day === "Fri"){
        console.log('Party night! Today is: Friday')
     }else if(day === "Mon"){
         console.log(`No party tonight! Today is: Monday`)
     }else if(day ==="Tue"){
        console.log('No party tonight! Today is: Tuesday')
     }else if(day === "Wed"){
        console.log('No party tonight! Today is: Wednesday')
     }else if(day==="Thu"){
        console.log('No party tonight! Today is: Thursday')
     }else{
     console.log('No party tonight! Today is: Sunday')
     }
}  
partyTime("09-02-2018")   