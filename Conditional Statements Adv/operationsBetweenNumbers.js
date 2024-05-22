function operationBetweenNumbers (input) {
    let N1 = Number (input[0]);
    let N2 = Number (input[1]);
    let operator = input [2];
    let result = 0;

    switch (operator) {
        case "+": 
            result = N1 + N2; break; 
        case "-":
            result = N1 - N2; break;
        case "*":
            result = N1 * N2; break;
        case "/":
            result = N1 / N2; break;
        case "%": 
            result = N1 % N2; break;
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        numType = '';
        if (result % 2 === 0) {
            numType = "even";
        } else 
            numType = "odd";
        console.log (`${N1} ${operator} ${N2} = ${result} - ${numType}`);
    } else if (N2 === 0 && operator === "/") {
        console.log (`Cannot divide ${N1} by zero`);
    } else if (N2 === 0 && operator === "%") {
        console.log (`Cannot divide ${N1} by zero`);
    } else if (operator === "%") {
        console.log (`${N1} % ${N2} = ${result}`);
    } else if (operator === "/") {
        console.log (`${N1} / ${N2} = ${result.toFixed(2)}`);
    }
}

operationBetweenNumbers (["10", "12", "+"]);
operationBetweenNumbers (["123", "12", "/"]);
operationBetweenNumbers (["112", "0", "/"]);
operationBetweenNumbers (["10", "1", "-"]);
operationBetweenNumbers (["10", "3", "%"]);
operationBetweenNumbers (["10", "0", "%"]);
operationBetweenNumbers (["7", "3", "*"]);