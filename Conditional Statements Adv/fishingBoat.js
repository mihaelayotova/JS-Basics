function fishingBoat (input) {
    let budget = Number (input[0]);
    let season = input [1];
    let fisher = input [2];
    let shipPrice = 0;

    switch (season) {
        case "Spring": 
            shipPrice = 3000; break;
        case "Summer": 
        case "Autumn": 
            shipPrice = 4200; break;
        case "Winter": 
            shipPrice = 2600; break;
    } 

    if (fisher <= 6) {
        shipPrice *= 0.9;
    } else if (fisher <= 11) {
        shipPrice *= 0.85;
    } else if (fisher >= 12) {
        shipPrice *= 0.75;
    }

    if (fisher % 2 === 0 && season !== "Autumn") {
        shipPrice *= 0.95;
    }

    if (budget >= shipPrice) {
        let moneyLeft = budget - shipPrice;
        console.log (`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else if (budget < shipPrice) {
        let moneyNeeded = shipPrice - budget;
        console.log (`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

fishingBoat (["3000", "Summer", "11"]);
fishingBoat (["3600", "Autumn", "6"]);
fishingBoat (["2000", "Winter", "13"]);