function godzillaVsKong (input) {
    let budget = Number (input[0]);
    let actorsCount = Number (input[1]);
    let costumePricePerActor = Number (input[2]);

    let decorPrice = 0.1 * budget;
    let totalCostumePrice = costumePricePerActor * actorsCount;

if (actorsCount > 150) {
    totalCostumePrice *= 0.9;
}

    let totalPrice = decorPrice + totalCostumePrice; 

if (budget >= totalPrice) {
    let moneyLeft = budget - totalPrice;
    
    console.log ("Action!");
    console.log (`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    
} else {
    let moneyNeeded = totalPrice - budget;

    console.log ("Not enough money!");
    console.log (`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
}

}

godzillaVsKong (["20000", "120", "55.5"]);
godzillaVsKong (["15437.62", "186", "57.99"]);
godzillaVsKong (["9587.88", "222", "55.68"])