function numberInRange(args) {
    let i = 0;
    let number = Number(arg[i]);
    while(number <= 1 || number >= 100) {
        console.log("My number is: " + number);
        i++; // po-dobre povishavaneto da e tuk a ne gore, za da mi pokaje i chisloto 1, a ne da zapichva ot 2 i da svurshva s 11
    }
}
numberInRange([5, 4, 6]);