function areaOfFigures(input) {
    let figure = input [0];

    if (figure === "square") {
        let a = Number(input [1]);
        let surface = a * a;
        console.log (surface.toFixed(3));
    } else if (figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number (input[2]);
        let surface = a * b;
        console.log (surface.toFixed(3));
    } else if (figure === "circle") {
        let r = Number(input[1]);
        let surface = Math.PI * Math.pow (r,2);
        console.log (surface.toFixed(3)); 
    } else if (figure === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let surface = (a * h) / 2;
        console.log (surface.toFixed(3));
    }
}

areaOfFigures (["square", "5"]);
areaOfFigures (["rectangle", "7", "2.5"]);
areaOfFigures (["circle", "6"]);
areaOfFigures (["triangle", "4.5", "20"]);