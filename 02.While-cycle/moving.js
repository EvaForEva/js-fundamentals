function moving(input) {
    let width = parseInt(input[0]);
    let length = parseInt(input[1]);
    let height = parseInt(input[2]);
    let i = 3;
    let freeSpace = width * length * height;
    let boxNumber = input[i];
    while(freeSpace > 0) {
        if(boxNumber == "Done") {
            console.log(freeSpace + " Cubic meters left.");
            return;
        }else {
            freeSpace = freeSpace - Number(boxNumber);
            i++;
            boxNumber = input[i];
        }    
    }
    console.log("No more free space! You need " + Math.abs(freeSpace) + " Cubic meters more.");
}
moving([10, 10, 2, 20, 20, 20, 20, 122])