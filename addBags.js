function addBags (input) {
    let pricePerBag20 = Number(input[0]);
    let kilogramBags = Number(input[1]);
    let days = Number(input[2]);
    let bags = Number(input[3]);
    
    if (kilogramBags < 10) {
        pricePerBag20 *= 0.2;
    } else if (kilogramBags <= 20) {
        pricePerBag20 *= 0.5;
    } else {
        pricePerBag20;
    }

    if (days < 7) {
        pricePerBag20 += (0.4 * pricePerBag20);
    }else if (days <= 30) {
        pricePerBag20 += (0.15 * pricePerBag20);
    } else {
        pricePerBag20 += (0.1 * pricePerBag20);
    }

    charge = pricePerBag20 * bags;

    console.log(`The total price of bags is: ${charge.toFixed(2)} lv.`);
}

addBags ([30, 18, 15, 2]);
addBags ([25.50, 5, 36, 6]);
addBags ([63.80, 23, 3, 1]);