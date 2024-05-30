function cake (input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let cakeSize = length * width;

    let index = 2;
    let piece = input[index];

    while (piece !== "STOP") {
        piece = Number(input[index]);
        cakeSize -= piece;
        
        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        } 
        
        index++;
        piece = input[index];
    }

        if (cakeSize > 0) {
            console.log(`${cakeSize} pieces are left.`);
        } 
    }

cake (["10","2","2","4","6","STOP"]);
cake (["10","10","20","20","20", "20", "21"]);