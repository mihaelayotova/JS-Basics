function time15Minutes (input){
    let hour = Number (input[0]);
    let min = Number (input[1]);

    totalMin = hour * 60 + min + 15; 

    let newHour = Math.floor (totalMin / 60);
    let newMin = totalMin % 60;
    
    if (newHour === 24) {
        newHour = 0;
    }

    if (newMin <10) {
        console.log (`${newHour}:0${newMin}`);
    } else {
        console.log (`${newHour}:${newMin}`);
    }

}

time15Minutes (["1", "46"]);
time15Minutes (["0", "01"]);
time15Minutes (["23", "59"]);
time15Minutes (["11", "08"]);
time15Minutes (["12", "49"]);