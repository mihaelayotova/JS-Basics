function graduation (input){
    let name = input[0];
    
    let index = 1; 
    let grade = Number(input[index]);

    let allGrade = 0;
    let classes = 0;
    let badGrades = 0;

    while (index <= 12) {
        grade = Number(input[index]);
        allGrade += grade;
        
        if (grade < 4.00) {
            badGrades++;

            if (badGrades === 2) {
            console.log (`${name} has been excluded at ${classes} grade`);
            break;
            }
        }

        classes++;
        index++;
        grade = Number(input[index]);
    }

    if (badGrades < 2) {
        console.log(`${name} graduated. Average grade: ${(allGrade / 12).toFixed(2)}`);
    }
}

graduation (["Gosho","5","5.5","6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation (["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);