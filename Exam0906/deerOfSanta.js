function deerOfSanta (input) {
    let missDays = Number(input[0]);
    let availableFoodKg = Number(input[1]);
    let foodPerDayFirstDeer = Number(input[2]);
    let foodPerDaySecondDeer = Number(input[3]);
    let foodPerDayThirdDeer = Number(input[4]);

    let neededFoodForAllDeer = missDays * (foodPerDayFirstDeer + foodPerDaySecondDeer + foodPerDayThirdDeer);

    if (availableFoodKg >= neededFoodForAllDeer) {
        let leftFood = Math.floor(availableFoodKg - neededFoodForAllDeer);
        console.log(`${leftFood} kilos of food left.`);
    } else {
        let neededFood = Math.ceil(neededFoodForAllDeer - availableFoodKg);
        console.log(`${neededFood} more kilos of food are needed.`);
    }
}

deerOfSanta(["2","10","1","1","2"]);
deerOfSanta(["5","10","2.1","0.8","11"]);