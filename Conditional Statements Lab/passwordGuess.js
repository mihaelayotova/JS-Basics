function passwordGuess (input) {
    let pass = input [0];
    let correct = "s3cr3t!P@ssw0rd";
    if (pass != "s3cr3t!P@ssw0rd"){
        console.log ("Wrong password!");
    }
    else if (pass === correct) {
        console.log ("Welcome");
    }
}

passwordGuess (["qwerty"]);