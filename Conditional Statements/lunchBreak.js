
function lunchBreak (input) {
    let seriesTitle = input[0];
    let seriesDuration = input [1];
    let breakDuration = input [2];

    let lunchDuration = 1 / 8 * breakDuration;
    let leasureDuration = 1 / 4 * breakDuration;
    let freeTime = breakDuration - (lunchDuration + leasureDuration);

if (freeTime >= seriesDuration) {
    let timeLeft = freeTime - seriesDuration;
    console.log (`You have enough time to watch ${seriesTitle} and left with ${Math.ceil(timeLeft)} minutes free time.`)
} else {
    let timeNeeded = Math.abs(freeTime - seriesDuration);
    console.log (`You don't have enough time to watch ${seriesTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`)
}
}

lunchBreak (["Game of Thrones", "60", "96"]);
lunchBreak (["Teen Wolf", "48", "60"]);