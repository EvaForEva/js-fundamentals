function steps(input) {
    let i = 0;
    let command = input[i];
    let targetSteps = 10000;
    let sum = 0;
    let check = true;
    while(sum <= targetSteps) {
        if(command === "Going home") {
            i++;
            command = Number(input[i]);
            sum += command;
            check = false;
            if(sum >= targetSteps) {
                console.log("Goal reached! Good job!");
            }else{
                console.log(Math.abs(sum - targetSteps) + " more steps to reach goal.");
            }
            break;
        }
        sum += Number(command);
        i++;
        command = input[i];//vzimame vtori element ot masiva
    }
    if(check) {
        console.log("Goal reached! Good job!");
    }
}
steps([1000, 1500, 2000, 6500])