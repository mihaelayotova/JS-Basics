function hotelRooms (input) {
    let month = input[0];
    let nights = Number (input[1]); 
    let studioPrice = 0;
    let apartPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50 * nights;
            apartPrice = 65 * nights; 
            if (nights > 7 && nights <= 14) {
                studioPrice *= 0.95; 
            } else if (nights > 14) {
                studioPrice *= 0.7;
                apartPrice *= 0.9;
            }
            break; 
        case "June":
        case "September":
            studioPrice = 75.20 * nights;
            apartPrice = 68.70 * nights; 
            if (nights > 14) {
                studioPrice *= 0.8;
                apartPrice *= 0.9;
            }
            break;
        case "July":
        case "August": 
            studioPrice = 76 * nights;
            apartPrice = 77 * nights; 
            if (nights > 14) {
                apartPrice *= 0.9;
            }
            break; 
    } console.log (`Apartment: ${apartPrice.toFixed(2)} lv.
    Studio: ${studioPrice.toFixed(2)} lv.`)
}

hotelRooms (["May", "15"]);
hotelRooms (["June", "14"]);
hotelRooms (["August", "20"]);