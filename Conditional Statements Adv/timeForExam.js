function timeForExam (input) {
    let hourExam = Number (input [0]);
    let minExam = Number (input[1]);
    let hourStudent = Number (input[2]);
    let minStudent = Number (input[3]);

    let totalMinExam = hourExam * 60 + minExam;
    let totalMinStudent = hourStudent * 60 + minStudent;

    let totalDiffTime = Math.abs (totalMinExam - totalMinStudent);
    let diffHour = Math.floor (totalDiffTime / 60);
    let diffMin = totalDiffTime % 60;

    if (totalMinExam === totalMinStudent) {
        console.log ("On time");
    } else if (totalMinExam < totalMinStudent) {
        console.log ("Late");

        if (totalDiffTime < 60) {
            console.log (`${totalDiffTime} minutes after the start`);
        } else {
                if (diffMin < 10) {
                console.log (`${diffHour}:0${diffMin} hours after the start`);
                } else {
            console.log (`${diffHour}:${diffMin} hours after the start`);        
                }
            }
    } else {
        if (totalDiffTime <= 30) {
            console.log ("On time");
            console.log (`${totalDiffTime} minutes before the start`);
        } else {
            console.log ("Early");
            
        if (totalDiffTime < 60) {
            console.log (`${totalDiffTime} minutes before the start`);
        } else {
        
            if (diffMin < 10) {
                console.log (`${diffHour}:0${diffMin} hours before the start`);
             } else {
                console.log (`${diffHour}:${diffMin} hours before the start`);        
                }
        }
    } 

} 
}

timeForExam (["9", "30", "9", "50"]);
timeForExam (["9", "00", "8", "30"]);
timeForExam (["16", "00", "15", "00"]);
timeForExam (["9", "00", "10", "30"]);
timeForExam (["14", "00", "13", "55"]);
timeForExam (["11", "30", "8", "12"]);
timeForExam (["10", "00", "10", "00"]);
timeForExam (["11", "30", "10", "55"]);
timeForExam (["11", "30", "12", "29"]);