function fitnessCenter (input) {
    let index = 0;
    let allPeople = Number(input[index]);
    
    index++;
    let peopleType = input[index];
    
    let backPeople = 0;
    let chestPeople = 0;
    let legsPeople = 0;
    let absPeople = 0;
    let shakePeople = 0;
    let barPeople = 0;

    while (index <= allPeople) {
        switch (peopleType) {
            case "Back": 
                backPeople++; break;
            case "Chest":
                chestPeople++; break;
            case "Legs":
                legsPeople++; break;
            case "Abs":
                absPeople++; break;
            case "Protein shake":
                shakePeople++; break;
            case "Protein bar":
                barPeople++; break;
        }

        index++;
        peopleType = input[index];
    }

        console.log(`${backPeople} - back`);
        console.log(`${chestPeople} - chest`);
        console.log(`${legsPeople} - legs`);
        console.log(`${absPeople} - abs`);
        console.log(`${shakePeople} - protein shake`);
        console.log(`${barPeople} - protein bar`);

        let workOut = allPeople - (shakePeople + barPeople);
        let protein = allPeople - workOut;
        
        console.log(`${(workOut/allPeople * 100).toFixed(2)}% - work out`);
        console.log(`${(protein/allPeople * 100).toFixed(2)}% - protein`);
}

fitnessCenter (["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"])
fitnessCenter (["7","Chest","Back","Legs","Legs","Abs","Protein shake","Protein bar"]);