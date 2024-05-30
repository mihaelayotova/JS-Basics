function moving (input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let apartSize = width * length * height;

    let index = 3;
    let boxes = input [index];

    while (boxes !== "Done") {
        boxes = Number(input[index]);
        apartSize -= boxes;

        if (apartSize <= 0) {
            console.log(`No more free space! You need ${Math.abs(apartSize)} Cubic meters more.`);
        break;
    } 

        index++;
        boxes = input[index];
    }

        if (apartSize > 0) {
            console.log(`${apartSize} Cubic meters left.`);
        }
}

moving (["10","10","2","20", "20", "20", "20", "122"]);
moving (["10","1","2","4","6","Done"]);