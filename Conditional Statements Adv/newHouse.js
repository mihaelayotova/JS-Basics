function newHouse (input) {
    let flowerType = input [0];
    let flowerNum = Number (input[1]);
    let budget = Number (input[2]);
    let flowerPrice = 0;

    switch (flowerType) {
        case "Roses": flowerPrice = flowerNum * 5; 
            if (flowerNum > 80) {
                flowerPrice *= 0.9;
            } break;
        case "Dahlias": flowerPrice = flowerNum * 3.8;
            if (flowerNum > 90) {
                flowerPrice *= 0.85;
            } break;
        case "Tulips": flowerPrice = flowerNum * 2.8;
            if (flowerNum > 80) {
                flowerPrice *= 0.85;
            } break; 
        case "Narcissus": flowerPrice = flowerNum * 3;
            if (flowerNum < 120) {
                flowerPrice *= 1.15;
            } break;
        case "Gladiolus": flowerPrice = flowerNum * 2.5;
            if (flowerNum < 80) {
                flowerPrice *= 1.2;
            } break;
    } if (flowerPrice > budget) {
        let moneyNeeded = flowerPrice - budget;
        console.log (`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - flowerPrice;
        console.log (`Hey, you have a great garden with ${flowerNum} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
    }
}

newHouse (["Roses", "55", "250"]);
newHouse (["Tulips", "88", "260"]);
newHouse (["Narcissus", "119", "360"]);