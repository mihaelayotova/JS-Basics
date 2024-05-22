function Repainting (input){
    let nylonPrice = 1.5 * (Number (input[0]) + 2);
    let paintPrice = 14.5 * (Number (input[1]) + (0.1 * Number(input[1])));
    let thinnerPrice = 5 * Number (input[2]);
    let workHours = Number (input[3]);
    let bagsPrice = 0.4;
   
    let workPerHourPrice = 0.3 * (nylonPrice + paintPrice + thinnerPrice + bagsPrice);
    let materialsPrice = nylonPrice + paintPrice + thinnerPrice + bagsPrice;
    let repaintingPrice = (workPerHourPrice * workHours) + materialsPrice;

    console.log (repaintingPrice)
}

Repainting (["10 ", "11 ", "4 ", "8 "]);
Repainting (["5 ", "10 ", "10 ", "1 "]);