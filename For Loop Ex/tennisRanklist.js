function tennisRanklist (input) {
    let tournmentCount = Number (input[0]);
    let startingPoints = Number (input[1]);
    let position = "";
    let winTournament = 0;
    let points = 0;

    for (let idx = 2; idx < input.length; idx++) {
        position = input [idx];
        switch (position) {
            case "W":
                points += 2000;
                winTournament++; break;
            case "F":
                points += 1200; break;
            case "SF":
                points += 720; break;
        }
    }   
        let winTournamentPercent = (winTournament/tournmentCount) * 100;
        let finalPoints = startingPoints + points;
        
        console.log (`Final points: ${finalPoints}`);
        console.log (`Average points: ${Math.floor(points/tournmentCount)}`);
        console.log (`${winTournamentPercent.toFixed(2)}%`);
}

tennisRanklist (["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist (["4", "750", "SF", "W", "SF", "W"]);
tennisRanklist (["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);