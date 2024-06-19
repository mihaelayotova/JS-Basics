function puppyCare (input){
    let availableFoodInKg = Number(input[0]);
    let availablefoodInGrams = availableFoodInKg * 1000;

    let index = 1;
    let command = input[index];
    let neededFoodInGrams = 0;

    while(command !== "Adopted"){
        let eatenFoodInGrams = Number(command);
        
        neededFoodInGrams += eatenFoodInGrams;
        
        index++;
        command = input[index];
    }

    if (availablefoodInGrams >= neededFoodInGrams){
        console.log(`Food is enough! Leftovers: ${(availablefoodInGrams - neededFoodInGrams)} grams.`);
    } else {
            console.log(`Food is not enough. You need ${(neededFoodInGrams - availablefoodInGrams)} grams more.`);
    }
}

// puppyCare(["4","130","345","400","180","230","120","Adopted"]);
// puppyCare(["3","1000","1000","1000","Adopted"]);
puppyCare(["2","999","456","999","999","123","456","Adopted"]);    