function cinema (input) {
    let projectionType = input [0];
    let rows = Number (input [1]);
    let cols = Number (input[2]);

    let tickets = rows * cols;
    let income = 0;

    if (projectionType === "Premiere") {
        income = tickets * 12;
    } else if (projectionType === "Normal") {
        income = tickets * 7.5;
    } else if (projectionType === "Discount") {
        income = tickets * 5;
    } 
        console.log (`${income.toFixed(2)} leva.`);
}

cinema (["Premiere", "10", "12"]);
cinema (["Normal", "21", "13"]);
cinema (["Discount", "12", "30"]);