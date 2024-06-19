function uniquePinCodes (input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    for (let num1 = 1; num1 <= a; num1++){
        if (num1 % 2 !== 0){
            continue;
        }

        for (let num2 = 2; num2 <= b; num2++){
            if (num2 === 2 || num2 === 3 || num2 === 5 || num2 === 7){
                for (let num3 = 1; num3 <= c; num3++){
                if (num3 % 2 === 0){
                console.log(`${num1} ${num2} ${num3}`);
                }
                continue;
            }
        }
        }
    }
}

uniquePinCodes(["3","5","5"]);
uniquePinCodes(["8","2","8"]);