function foodDelivery (input) {
    let chickenMenus = Number (input[0])
    let fishMenus = Number (input[1]);
    let vegMenus = Number (input[2]);

    let menusPrice = chickenMenus * 10.35 + fishMenus * 12.40 + vegMenus * 8.15;
    let dessertPrice = menusPrice * 0.2;
    let totalPrice = menusPrice + dessertPrice + 2.5

    console.log (totalPrice);
}
foodDelivery (["2 ", "4 ", "3 "]);
foodDelivery (["9 ", "2 ", "6 "]);