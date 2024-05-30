function examPreparation (input) {
    let totalBadGrade = Number(input[0]);
    let index = 1;
    let nameTask = input[index];
    let gradeTask = Number(input[index + 1]);

    let badGrades = 0;
    let allGrades = 0;
    let allTasks = 0;
    let lastNameTask = '';

    while (nameTask !== "Enough") {
        nameTask = input[index];
        gradeTask = Number(input[index + 1]);
        index++;
        allGrades += gradeTask;

            if (gradeTask <= 4) {
                badGrades++;
                if (totalBadGrade <= badGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`); 
                break;
                }
            }   

            allTasks++;
                if (nameTask !== "Enough") {
                lastNameTask = nameTask;
                }
            index++;    
            nameTask = input[index];
    }
    
    if (totalBadGrade > badGrades) {
        console.log(`Average score: ${(allGrades/allTasks).toFixed(2)} \nNumber of problems: ${allTasks} \nLast problem: ${lastNameTask}`);
    }
}

examPreparation (["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);
examPreparation (["2","Income","3","Game Info","6","Best Player","4"]);