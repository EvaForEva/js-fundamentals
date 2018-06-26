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