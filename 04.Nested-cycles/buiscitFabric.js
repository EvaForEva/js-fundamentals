function fabric(args) {
    let index = 0;
    let productCount = 0;
    let n = Number(args[index]);
    let flour = false;
    let eggs = false;
    let sugar = false;
    while(productCount < n) {
        index++;
        let currentElement = args[index];
        while(currentElement != "Bake!") {
            if(currentElement == "flour") {
                flour = true;
            }else if(currentElement == "eggs") {
                eggs = true;
            }else if(currentElement == "sugar") {
                sugar = true;
            }
            index++;
            currentElement = args[index];
        }
        if(eggs && sugar && flour) {
            productCount++;
            console.log("Baking batch number " + productCount + "...")
            let flour = false;
            let eggs = false;
            let sugar = false;
        }else {
            console.log("The batter should contain flour, eggs and sugar!")
        }
    }
}
fabric([2, "flour", "eggs", "sugar", "chocolate", "Bake!", "flour", "eggs", "sugar", "caramel", "peanuts", "Bake!"])
