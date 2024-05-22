function vacantionBooks (input) {
    let pages = Number (input[0]);
    let pagesPerHour = Number (input [1]);
    let days = Number (input[2]);

    let totalHours = pages / pagesPerHour;
    let hoursPerDay = totalHours / days;
    console.log (hoursPerDay);
}

vacantionBooks (["212 ", "20 ", "2 "]);
vacantionBooks (["432 ", "15 ", "4 "]);