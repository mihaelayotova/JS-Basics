function pCStore (input) {
    let procesorPrice = Number(input[0]);
    let videoCardPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);

    let procesorPriceInLeva = procesorPrice * 1.57;
    let videoCardPriceInLeva = videoCardPrice * 1.57;
    let ramPriceInLeva = ramPrice * 1.57;

    let allRamPrice = ramCount * ramPriceInLeva;
    let procesorNewPriceInLeva = procesorPriceInLeva - (procesorPriceInLeva * discount);
    let videoCardNewPriceInLeva = videoCardPriceInLeva - (videoCardPriceInLeva * discount);

    let totalPrice = allRamPrice + procesorNewPriceInLeva + videoCardNewPriceInLeva;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);
}

pCStore(["500","200","80","2","0.05"]);
pCStore(["1200","850","120","4","0.1"]);
pCStore(["200","100","80","1","0.01"]);