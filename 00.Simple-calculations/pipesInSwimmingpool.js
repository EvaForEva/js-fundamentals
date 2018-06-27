function pipesInSwimmingpool([arg1, arg2, arg3, arg4]) {
    let volumePool =Number(input[0])
    let pipe1 = Number(input[1]);
    let pipe2 = Number(input[2]);
    let h = Number(input[3]);
    let flowRate = (pipe1 + pipe2) * h;
    let totalLiters = (flowRate / volumePool) *100
    let pipeP1 = pipe1 * h;
    let pipeP2 = pipe2 * h;
    let pipe1Total = parseInt((pipeP1 / flowRate) * 100)
    let pipe2Total = parseInt((pipeP2 / flowRate) * 100)
    if(flowRate <= volumePool ){
        console.log(`The pool is ${parseInt(totalLiters)}% full. Pipe 1: ${pipe1Total}%. Pipe 2: ${pipe2Total}%.`)
    }else{
        let overFlow = Math.abs(flowRate - volumePool).toFixed(1);
        console.log(`For ${h} hours the pool overflows with ${overFlow} liters.`)
}
pipesInSwimmingpool([1000, 100, 120, 3])