function travel([arg1, arg2]) {
    let budget = Number(arg1);
    let season = arg2;
    let finalSum = 0;
    let type = "";
    if(budget <= 100) {
       console.log("Somewhere in Bulgaria");
       if(season === "summer") {
           finalSum = budget * 0.3;
           type = "Camp";
           console.log(`${type} - ${finalSum.toFixed(2)}`);
       }else {
           finalSum = budget * 0.7;
           type = "Hotel";
           console.log(`${type} - ${finalSum.toFixed(2)}`);
       } 
    }else if(budget <= 1000) {
       console.log("Somewhere in Balkans");
       if(season === "summer") {
            finalSum = budget * 0.4;
            type = "Camp";
            console.log(`${type} - ${finalSum.toFixed(2)}`);
       }else {
           finalSum = budget * 0.8;
           type = "Hotel";
           console.log(`${type} - ${finalSum.toFixed(2)}`);  
       }      
    }else if(budget > 1000) {
        console.log("Somewhere in Europe");
        finalSum = budget * 0.9;
        type = "Hotel";
        console.log(`${type} - ${finalSum.toFixed(2)}`);
    }
}
travel([50, "summer"])
