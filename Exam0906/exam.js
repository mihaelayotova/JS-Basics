function exam (input) {
    let studentsCount = Number(input[0]);
    let studentCount5 = 0;
    let studentCount4 = 0;
    let studentCount3 = 0;
    let studentCount2 = 0;
    let allGrades = 0;
    
    for(let i = 1; i <= studentsCount; i++){
        let grade = Number(input[i]);
        allGrades += grade;

        if (grade >= 5.00){
            studentCount5++;
        } else if (grade >= 4.00){
            studentCount4++;
        } else if (grade >= 3.00){
            studentCount3++;
        } else if (grade >= 2.00){
            studentCount2++;
        }
    }

    let avgGrade = allGrades / studentsCount;

    let studentCount5Percent = (studentCount5 / studentsCount) * 100;
    let studentCount4Percent = (studentCount4 / studentsCount) * 100;
    let studentCount3Percent = (studentCount3 / studentsCount) * 100;
    let studentCount2Percent = (studentCount2 / studentsCount) * 100;

    console.log(`Top students: ${studentCount5Percent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${studentCount4Percent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${studentCount3Percent.toFixed(2)}%`);
    console.log(`Fail: ${studentCount2Percent.toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}

exam(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"]);
exam(["6","2","3","4","5","6","2.2"]);