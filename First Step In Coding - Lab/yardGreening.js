function yardGreening (input) {
    let priceGreening = 7.61 * Number(input[0]);
    let discount = 0.18 * priceGreening;
    let finalPrice = priceGreening - discount;

    console.log (`The final price is: ${finalPrice} lv.`);
    console.log (`The discount is: ${discount} lv.`);
}

yardGreening (["550"]);
yardGreening (["150"]);