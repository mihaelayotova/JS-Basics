function oscars (input) {
    let actorName = input [0];
    let startPoints = Number (input [1]);
    let allPoints = 0;
    
    allPoints += startPoints;
    
    for (let idx = 3; idx < input.length; idx = idx + 2) {
        let judgeName = String(input[idx]);
        let judgePoints = Number(input[idx + 1]);
        let pointsPerJudge = judgePoints * judgeName.length / 2;
        
        allPoints += pointsPerJudge; 
        if (allPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${allPoints.toFixed(1)}!`); break;
        } 
        } 

        if (allPoints < 1250.5) {
            let diff = Math.abs(allPoints - 1250.5);
            console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
        }
}

oscars (["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars (["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);