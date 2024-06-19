function goldMine (input){
    let locationCount = Number(input[0]);
    let index = 1;

    for(let i = 0; i < locationCount; i++){
        let avgGoldPerDay = Number(input[index]);
        index++;
        let workingDays = Number(input[index]);
        index++;

        let sum = 0;
        for(let idx = 0; idx < workingDays; idx++){
            let goldPerDay = Number(input[index]);
            index++;

            sum += goldPerDay;
        }

        let avarage = sum / workingDays;

        if (avarage >= avgGoldPerDay){
            console.log(`Good job! Average gold per day: ${avarage.toFixed(2)}.`);
        } else {
            console.log(`You need ${(avgGoldPerDay - avarage).toFixed(2)} gold.`);
        }
    }
}

goldMine (["2","10","3","10","10","11","20","2","20","10"]);    
goldMine (["1","5","3","10","1","3"]);