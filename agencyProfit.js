function agencyProfit (input) {
    let company = input[0];
    let adultTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let adultTicketsPrice = Number(input[3]);
    let service = Number(input[4]);

    kidsTicketPrice = adultTicketsPrice * 0.3;
    adultTicketsPrice += service;
    kidsTicketPrice += service;
    
    allTicketsPrice = (adultTickets * adultTicketsPrice) + (kidsTickets * kidsTicketPrice);
    profit = 0.2 * allTicketsPrice;

    console.log(`The profit of your agency from ${company} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit (["WizzAir","15", "5","120","40"]);