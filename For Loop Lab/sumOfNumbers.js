function SumOfNumbers (input) {
    let number = input [0];
    let sum = 0;

    for (i = 0; i < number.length; i++) {
        let n = Number (number [i]);
        sum += n; 
    } console.log (`The sum of the digits is:${sum}`);
}

SumOfNumbers (["1234"]);
SumOfNumbers (["564891"]);