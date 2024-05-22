function depositCalculator (input) {
    let depositedSum = Number (input[0]);
    let depositedPeriod = Number (input[1]);
    let annualPercent = Number (input[2]) / 100;

    let sum = depositedSum + depositedPeriod * ((depositedSum*annualPercent)/12);
    console.log(sum);
}

depositCalculator (["200 ", "3 ", "5.7 "])
depositCalculator (["2350", "6 ", "7 "])