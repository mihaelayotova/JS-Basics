function finalCompetition (input) {
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let money = 0;

    if (place === "Bulgaria"){
        money = points * dancers;
        switch (season){
            case "summer": 
                money *= 0.95; break;
            case "winter":
                money *= 0.92; break;
        }
    } else if (place === "Abroad"){
        money = dancers * points;
        money *= 1.5;
        switch (season){
            case "summer": 
                money *= 0.90; break;
            case "winter":
                money *= 0.85; break;
        }
    }

    let charity = 0.75 * money;
    let leftMoney = money - charity;
    let moneyPerDancer = leftMoney / dancers;

   console.log(`Charity - ${charity.toFixed(2)}`);
   console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}

finalCompetition (["1","89.5","summer","Abroad"]);
finalCompetition(["25","98","winter","Bulgaria"]);