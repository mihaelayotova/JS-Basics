function journey (input) {
    let budget = Number (input[0]);
    let season = input [1];
    let destination = "";
    let amountSpent = 0;
    let holidayType = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer": 
                holidayType = "Camp";
                amountSpent = 0.3 * budget; break;
            case "winter": 
                holidayType = "Hotel";
                amountSpent = 0.7 * budget; break;          
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer": 
                holidayType = "Camp";
                amountSpent = 0.4 * budget; break;
            case "winter": 
                holidayType = "Hotel";
                amountSpent = 0.8 * budget; break;
        } 
    } else if (budget > 1000) {
        destination = "Europe";
        switch (season) {
            case "summer": 
            case "winter": 
                holidayType = "Hotel";
                amountSpent = 0.9 * budget; break; 
            }
    } console.log (`Somewhere in ${destination} 
${holidayType} - ${amountSpent.toFixed(2)}`)

}

journey (["50", "summer"]);
journey (["75", "winter"]);
journey (["312", "summer"]);
journey (["678.53", "winter"]);
journey (["1500", "summer"]);