function dumbPassword(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let result = '';
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            for(let k = 97; k < l + 97; k++) {
                for(let p = 97; p < l + 97; p++) {
                    for(let o = 1; o <= n; o++) {
                        let firstChar = String.fromCharCode(k);
                        let secondChar =  String.fromCharCode(p);
                        if(o > i && o > j) {
                            result = result + i + j + firstChar + secondChar + o + " ";
                        }
                    }
                }
            }
        } 
    }
    console.log(result);
}
dumbPassword([2, 4])