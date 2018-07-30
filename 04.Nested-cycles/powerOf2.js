function evenPowerOf2(args) {
   let finalPower = Number(args[0]); 
    for(let currentPower = 0; currentPower <= finalPower; currentPower += 2) {
        console.log(Math.pow(2, currentPower));
    }
}
evenPowerOf2([10])