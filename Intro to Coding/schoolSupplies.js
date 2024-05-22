function schoolSupplies (input) {
    let penPack = Number (input[0]) * 5.8;
    let markerPack = Number (input[1]) * 7.2;
    let detergentLiters = Number (input[2]) * 1.2;
    let discount = Number (input[3]); 
    
    let totalamount = penPack + markerPack + detergentLiters
    let discountPercent = (discount / 100) * totalamount;
    let totalPrice = totalamount - discountPercent

    console.log (totalPrice)
}

schoolSupplies (["2 ", "3 ", "4 ", "25 "]);
schoolSupplies (["4 ", "2 ", "5 ", "13 "]);