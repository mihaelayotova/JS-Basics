function vetParking (input){
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalSum = 0;

    for (let day = 1; day <= days; day++){
        let sum = 0;
        for (let hour = 1; hour <= hours; hour++){

            if (day % 2 === 0 && hour % 2 !== 0){
                    sum += 2.5;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                    sum += 1.25;
            } else {
                    sum += 1.00;
            }
    }  
        totalSum += sum;
        console.log(`Day: ${day} - ${sum.toFixed(2)} leva`);
    }
        console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

vetParking(["2","5"]);
vetParking(["5","2"]);