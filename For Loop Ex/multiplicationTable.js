function multiplicationTable (input) {
    let secondNum = Number (input [0]);

    for (let firstNum = 1; firstNum <= 10; firstNum++) {
        let result = firstNum * secondNum;
        console.log (`${firstNum} * ${secondNum} = ${result}`)
    } 
}

multiplicationTable (["5"]);