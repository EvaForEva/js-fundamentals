function travelling(input) {
    for (let i = 0; i <= input.length; i += 1) {
        let destination = '';
        let monthly = 0;
        let savingSum = 0;
        let budget = 0;
        if (input[i] !== 'END' && input[i] !== 'End') {
            if (isNaN(+input[i])) {
                destination = input[i];
                budget = +input[i + 1];
                for (let j = i + 2; !( isNaN(+input[j]) ); j += 1) {
                    monthly = +input[j];
                    if (monthly >= 4) {
                        savingSum += monthly;
                    }
                }
            }
        }else {
            break;
        }
        if (destination !== '') {
            if (savingSum >= budget) {
                console.log(`Going to ${destination}!`);
            }
        }
    }
}
travelling([])