function basketballEquipment (input){
    let trainingFee = Number (input[0]);
    let sneakersPrice = trainingFee * 0.6;
    let outfitPrice = sneakersPrice * 0.8;
    let basketballPrice = (1 / 4) * outfitPrice;
    let accessoriesPrice = (1 / 5) * basketballPrice;
    let totalPrice = trainingFee + sneakersPrice + outfitPrice + basketballPrice + accessoriesPrice

    console.log (totalPrice);
}

basketballEquipment (["365"]);
basketballEquipment (["550"]);