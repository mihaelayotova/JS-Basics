function petShop (input) {
    let dogPrice = 2.5 * Number (input[0]);
    let catPrice = 4 * Number (input[1]);
    let totalPrice = dogPrice + catPrice;

    console.log ((totalPrice) + " lv.");
}

petShop (["5 ", "4 "]);
petShop (["13", "9"]);