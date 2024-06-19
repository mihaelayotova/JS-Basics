function programmingBook (input){
    let printingPerPage = Number(input[0]);
    let printingPerCover = Number(input[1]);
    let discount = Number(input[2]);
    let designerPrice = Number(input[3]);
    let percentPaidFromTeam = Number(input[4]);

    let printingAllPages = 899 * printingPerPage;
    let printingTwoCovers = 2 * printingPerCover;
    let PricePerBook = printingAllPages + printingTwoCovers;

    let discountPerBook = PricePerBook * (discount / 100);

    PricePerBook -= discountPerBook;
    PricePerBook += designerPrice;
    PricePerBook = PricePerBook - (PricePerBook * (percentPaidFromTeam / 100));

    console.log(`Avtonom should pay ${PricePerBook.toFixed(2)} BGN.`);
}

programmingBook (["0.01","1","10","20","20"]);
programmingBook (["0.05","1.20","40","19.99","20"]);