function number100To200 (input){
    let number = input [0];
    if (number < 100){
        console.log ("Less than 100");
    } else if (100 <= number && number <= 200) {
        console.log ("Between 100 and 200");
    } else if (number >= 200) {
        console.log ("Greater than 200");
    }
}

number100To200 (["100"]);
