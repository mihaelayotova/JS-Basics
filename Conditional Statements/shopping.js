function shopping (input) {
    let peterBudget = Number (input[0]);
    let videoCardNum = Number (input[1]);
    let processorNum = Number (input[2]);
    let ramMemoryNum = Number (input[3]); 

    let videoCardPrice = videoCardNum * 250;
    let processorPrice = processorNum * (0.35 * videoCardPrice);
    let ramMemoryPrice = ramMemoryNum * (0.1 * videoCardPrice);
    let totalPrice = videoCardPrice + processorPrice + ramMemoryPrice;

    if (videoCardNum > processorNum) {
        totalPrice *= 0.85;
    }

    if (peterBudget >= totalPrice) {
        let leftBudget = peterBudget - totalPrice;
        console.log (`You have ${leftBudget.toFixed(2)} leva left!`)
    } else {
        let neededMoney = totalPrice - peterBudget;
        console.log (`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`)
    }
}

shopping (["900", "2", "1", "3"]);
shopping (["920.45", "3", "1", "1"]);