function building(args) {
    let floor = Number(args[0]);
    let room = Number(args[1]);
    for(let i = floor; i >= 1; i--) {
        let print = '';
        for(let j = 0; j < room; j++) {
            if(i == floor) {
                print = print + "L" + i + j + " ";
            }else if(i%2 == 0) {
               print = print + "O" + i + j + " ";
            }
            else {
               print = print + "A" + i + j + " ";
            }
        }
        console.log(print);
    }
}
building([6,4])