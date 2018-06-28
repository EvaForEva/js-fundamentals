function volleyball([arg1, arg2, arg3]) {
    let year = arg1;
    let holidays = parseInt(arg2);
    let weekendsInHometown = parseInt(arg3);
    let normalYear = 2/3 * holidays + (0.75 * (48 - weekendsInHometown)) + weekendsInHometown;
    let leapYear = Math.floor(1.15 * normalYear);
    if(year == "normal") {console.log(Math.floor(normalYear));};
    if(year == "leap") {console.log(leapYear);};
}
volleyball(["leap", 5, 2])