function personalInfo(arguments) {
    let firstName = arguments[0];
    let lastName = arguments[1];
    let age = Number(arguments[2]);
    let city = arguments[3];
    console.log("You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + city + ".");
}
personalInfo([Petar, Petrov, 24, Sofia])