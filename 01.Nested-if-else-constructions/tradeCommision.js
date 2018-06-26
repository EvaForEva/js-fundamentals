function tradeCommisions([arg1, arg2]) {
    let city = arg1.toLowerCase();
    let volmeSales = Number(arg2);
    let commission = -1.0;
    if(city === "sofia") {
        if(0 <= volmeSales && volmeSales <= 500) {
        commission = 0.05;   
        }else if (500 < volmeSales && volmeSales <= 1000) {
        commission = 0.07;   
        }else if (1000 < volmeSales && volmeSales <= 10000) {
        commission = 0.08;   
        }else if (volmeSales > 10000) {
        commission = 0.12;   
        }
    }else if(city === "varna") {
        if(0 <= volmeSales && volmeSales <= 500) {
        commission = 0.045;   
        }else if (500 < volmeSales && volmeSales <= 1000) {
        commission = 0.075;   
        }else if (1000 < volmeSales && volmeSales <= 10000) {
        commission = 0.10;   
        }else if (volmeSales > 10000) {
        commission = 0.13;   
        }
    }else if(city === "plovdiv") {
        if(0 <= volmeSales && volmeSales <= 500) {
        commission = 0.055;   
        }else if (500 < volmeSales && volmeSales <= 1000) {
        commission = 0.08;   
        }else if (1000 < volmeSales && volmeSales <= 10000) {
        commission = 0.12;   
        }else if (volmeSales > 10000) {
        commission = 0.145;   
        }
    }
    if (commission >=0) {
        console.log((volmeSales * commission).toFixed(2));
    }else {
        console.log("error");  
    }
}
tradeCommisions("Plovdiv", 4999.99)
