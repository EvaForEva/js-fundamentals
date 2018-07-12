function histogram(args) {
    let n = Number(args[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;
    for(let i = 1; i <= n; i++) {
        let currentNumber = Number(args[i]);
        if(currentNumber < 200) {
           p1Counter++;
        }else if(currentNumber >= 200 && currentNumber <= 399) {
           p2Counter++;
        }else if(currentNumber > 399 && currentNumber <= 599) {
           p3Counter++;
        }else if(currentNumber >= 600 && currentNumber <= 799) {
           p4Counter++;
        }else if(currentNumber >= 800) {
           p5Counter++;
        }
    }
    console.log(((p1Counter / n) * 100).toFixed(2) + " % ");
    console.log(((p2Counter / n) * 100).toFixed(2) + " % ");
    console.log(((p3Counter / n) * 100).toFixed(2) + " % ");
    console.log(((p4Counter / n) * 100).toFixed(2) + " % ");
    console.log(((p5Counter / n) * 100).toFixed(2) + " % ");
}
histogram([3, 1, 2, 999])