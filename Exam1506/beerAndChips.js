function beerAndChips (input){
    let name = input[0];
    let budget = Number(input[1]);
    let beerCount = Number(input[2]);
    let chipsCount = Number(input[3]);

    let beerPrice = beerCount * 1.2;
    let chipsPrice = 0.45 * beerPrice;
    chipsPrice = Math.ceil(chipsCount * chipsPrice);

    let bill = beerPrice + chipsPrice;

    if (budget >= bill){
        let leftMoney = budget - bill;
        console.log(`${name} bought a snack and has ${leftMoney.toFixed(2)} leva left.`);
    } else {
        let neededMoney = Math.abs(budget - bill)
        console.log(`${name} needs ${neededMoney.toFixed(2)} more leva!`);
    }
}

beerAndChips (["George","10","2","3"]);
beerAndChips (["Valentin","5","2","4"]);