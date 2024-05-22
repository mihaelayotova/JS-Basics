function worldSwimmingRecord (input) {
    let recordTimeSec = Number (input[0]);
    let distanceMeter = Number (input[1]);
    let timeOneMeterSec = Number (input[2]);

    let ivanTime = distanceMeter * timeOneMeterSec;
    let resistanceDist = Math.floor (distanceMeter / 15);
    let resistanceTime = resistanceDist * 12.5;
    let ivanTimeTotal = (ivanTime + resistanceTime);

    if (ivanTimeTotal >= recordTimeSec) {
        let neededSec = ivanTimeTotal - recordTimeSec;

        console.log (`No, he failed! He was ${neededSec.toFixed(2)} seconds slower.`)
    } else {
         console.log (`Yes, he succeeded! The new world record is ${ivanTimeTotal.toFixed(2)} seconds.`)
    }
}

worldSwimmingRecord (["10464", "1500", "20"]);
worldSwimmingRecord (["55555.67", "3017", "5.03"]);