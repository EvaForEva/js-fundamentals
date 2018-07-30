function numberTable(input) {
    let n = Number(input[0]);
    let num = 0;
    for(let row = 0; row < n; row++) {
        let str = " ";
        for (let col = 0; col < n; col++) {
            num = row + col + 1;
            if (num > n) {
                num = (2 * n) - num;
            }
            str += num + " ";
        }
        console.log(str);
    }
}
 numberTable([])