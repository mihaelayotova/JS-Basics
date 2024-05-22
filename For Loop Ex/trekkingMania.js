function trekkingMania (input) {
    let groupCount = Number (input [0]);
    let peopleCountInGroup = "";
    let groupMusala = 0;
    let groupMonblan = 0;
    let groupKilimandjaro = 0;
    let groupK2 = 0; 
    let groupEverest = 0;
    let allPeople = 0;

    for (let idx = 1; idx < groupCount + 1; idx++) {
        peopleCountInGroup = Number (input[idx]);
        allPeople += peopleCountInGroup;
        
        if (peopleCountInGroup <= 5) {
            groupMusala += peopleCountInGroup;
        } else if (peopleCountInGroup <= 12) {
            groupMonblan += peopleCountInGroup;
        } else if (peopleCountInGroup <= 25) {
            groupKilimandjaro += peopleCountInGroup;
        } else if (peopleCountInGroup <= 40) {
            groupK2 += peopleCountInGroup;
        } else {
            groupEverest += peopleCountInGroup;
        }  
    } 

        let groupMusalaInPercent = (groupMusala / allPeople) * 100;
        let groupMonblanInPercent = (groupMonblan / allPeople) * 100;
        let groupKilimandjaroInPercent = (groupKilimandjaro / allPeople) * 100;
        let groupK2InPercent = (groupK2 / allPeople) * 100;
        let groupEverestInPercent = (groupEverest / allPeople) * 100;

        console.log (`${groupMusalaInPercent.toFixed(2)}%`);
        console.log (`${groupMonblanInPercent.toFixed(2)}%`);
        console.log (`${groupKilimandjaroInPercent.toFixed(2)}%`);
        console.log (`${groupK2InPercent.toFixed(2)}%`);
        console.log (`${groupEverestInPercent.toFixed(2)}%`);
}

trekkingMania (["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania (["5", "25", "41", "31", "250", "6"]);