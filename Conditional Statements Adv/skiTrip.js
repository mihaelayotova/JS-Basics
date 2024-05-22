function skiTrip (input) {
    let days = Number (input[0]);
    let roomType = input [1];
    let feedback = input [2];
    let nights = days - 1;
    let roomPrice = 0;

    switch (roomType) {
        case "room for one person": 
            roomPrice = 18 * nights;
            break;
        case "apartment":
            roomPrice = 25 * nights; 
            if (days < 10) {
                roomPrice *= 0.7;
            } else if (days >= 10 && days <= 15) {
                roomPrice *= 0.65;
            } else {
                roomPrice *= 0.5;
            }
            break;
        case "president apartment":
            roomPrice = 35 * nights; 
            if (days < 10) {
                roomPrice *= 0.9;
            } else if (days >= 10 && days <= 15) {
                roomPrice *= 0.85;
            } else {
                roomPrice *= 0.8;
            }
            break;
    } 

    switch (feedback) {
        case "positive": 
            roomPrice *= 1.25; break;
        case "negative": 
            roomPrice *= 0.9; break;
    } console.log (roomPrice.toFixed(2));
}

skiTrip (["14", "apartment", "positive"]);
skiTrip (["30", "president apartment", "negative"]);
skiTrip (["12", "room for one person", "positive"]);
skiTrip (["2", "apartment", "positive"]);