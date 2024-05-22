function inValid (input) {
    let num = Number (input[0]);

    if (100 <= num && num <= 200 || num === 0) {
        console.log 
    } else console.log ("invalid");
}

function inValid (input) {
    let num = Number (input[0]);

    let isValid = (num >= 100 && num <= 200 || num === 0);

    if (!isValid) {
        console.log ("invalid")
    }
}

inValid (["75"]);
inValid (["150"]);
inValid (["220"]);
inValid (["199"]);
inValid (["-1"]);
inValid (["100"]);
inValid (["200"]);
inValid (["0"]);