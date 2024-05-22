function sumSeconds (input){
    let time1 = Number (input[0]);
    let time2 = Number (input[1]);
    let time3 = Number (input[2]);

    let totalTimeInSec = time1 + time2 + time3;
    let minutes = Math.floor (totalTimeInSec / 60);
    let secundes = totalTimeInSec % 60;

if (secundes <10) {
    console.log (`${minutes}:0${secundes}`);
} else {
    console.log (`${minutes}:${secundes}`);
}
}

sumSeconds (["35", "45", "44"]);
sumSeconds (["22", "7", "34"]);
sumSeconds (["50", "50", "49"]);
sumSeconds (["14", "12", "10"]);