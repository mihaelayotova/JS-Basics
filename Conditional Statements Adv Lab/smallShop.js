function smallShop (input) {
    let product = input [0];
    let city = input [1];
    let quantity = Number (input [2]);
    let price = 0;

    if (city === "Sofia") {
        switch (product) {
            case "coffee": price = 0.5 * quantity; break; 
            case "water": price = 0.8 * quantity; break;
            case "beer": price = 1.20 * quantity; break;
            case "sweets": price = 1.45 * quantity; break;
            case "peanuts": price = 1.6 * quantity; break;
        }

    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee": price = 0.4 * quantity; break;
            case "water": price = 0.7 * quantity; break;
            case "beer": price = 1.15 * quantity; break;
            case "sweets": price = 1.30 * quantity; break;
            case "peanuts": price = 1.50 * quantity; break;
        }

    } else if (city === "Varna") {
        switch (product) {
            case "coffee": price = 0.45 * quantity; break;
            case "water": price = 0.7 * quantity; break;
            case "beer": price = 1.10 * quantity; break;
            case "sweets": price = 1.35 * quantity; break;
            case "peanuts": price = 1.55 * quantity; break;
}           
    }       console.log (price);
}
            

smallShop (["coffee", "Varna", "2"]);
smallShop (["peanuts", "Plovdiv", "1"]);
smallShop (["beer", "Sofia", "2"]);
smallShop (["water", "Plovdiv", "2"]);
smallShop (["sweets", "Sofia", "2.23"]);