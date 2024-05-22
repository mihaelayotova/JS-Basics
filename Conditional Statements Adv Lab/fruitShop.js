function fruitShop (input) {
    let fruit = input [0];
    let day = input [1];
    let quantity = Number (input [2]);
    price = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": price = 2.5 * quantity; break;
            case "apple": price = 1.2 * quantity; break;
            case "orange": price = 0.85 * quantity; break;
            case "grapefruit": price = 1.45 * quantity; break;
            case "kiwi": price = 2.7 * quantity; break;
            case "pineapple": price = 5.5 * quantity; break;
            case "grapes": price = 3.85 * quantity; break;
            default: console.log ("error"); break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": price = 2.7 * quantity; break;
            case "apple": price = 1.25 * quantity; break;
            case "orange": price = 0.9 * quantity; break;
            case "grapefruit": price = 1.6 * quantity; break;
            case "kiwi": price = 3 * quantity; break;
            case "pineapple": price = 5.6 * quantity; break;
            case "grapes": price = 4.2 * quantity; break;
            default: console.log ("error"); break; 
        } 
    } else console.log ("error");

    if (price !== 0) {
        console.log (price.toFixed(2));
    } 
} 

fruitShop (["apple", "Tuesday", "2"]);
fruitShop (["orange", "Sunday", "3"]);
fruitShop (["kiwi", "Monday", "2.5"]);
fruitShop (["grapes", "Saturday", "0.5"]);
fruitShop (["tomato", "Monday", "0.5"]);