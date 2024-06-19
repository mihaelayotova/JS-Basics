function aluminumJoinery (input) {
    let num = Number(input[0]);
    let type = input[1];
    let deliveryType = input[2];

    let deliveryPrice = 60;

    let price90 = 110 * num;
    let price100 = 140 * num;
    let price130 = 190 * num;
    let price200 = 250 * num;

    let totalPrice = 0;

    if (num <= 10) {
        console.log(`Invalid order`);
    } else {
        switch (type){
        case "90X130":
            if (num > 60) {
                totalPrice = price90 - (price90 * 0.08);
            } else if (num > 30) {
                totalPrice = price90 - (price90 * 0.05);
            } else if (num > 10) {
                totalPrice = price90;
            } break;
        case "100X150":
            if (num > 80) {
                totalPrice = price100 - (price100 * 0.1);
            } else if (num > 40) {
                totalPrice = price100 - (price100 * 0.06);
            } else if (num > 10) {
                totalPrice = price100;
            } break;
        case "130X180":
            if (num > 50) {
                totalPrice = price130 - (price130 * 0.12);
            } else if (num > 20) {
                totalPrice = price130 - (price130 * 0.07);
            } else if (num > 10) {
                totalPrice = price130;
            } break;
        case "200X300":
            if (num > 50) {
                totalPrice = price200 - (price200 * 0.14);
            } else if (num > 25) {
                totalPrice = price200 - (price200 * 0.09);
            } else if (num > 10) {
                totalPrice = price200;
            } break;
    }
        if (deliveryType === "With delivery") {
        totalPrice += deliveryPrice; 
    }
    }

    if (num > 99) {
            totalPrice *= 0.96;
        } 

    if (totalPrice > 0) {
        console.log(`${totalPrice.toFixed(2)} BGN`)};
}

aluminumJoinery (["40", "90X130","Without delivery"]);
aluminumJoinery (["105","100X150","With delivery"]);
aluminumJoinery(["2","130X180","With delivery"]);