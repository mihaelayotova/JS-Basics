function characterSequence (input) {
    let word = input[0];

    for (i = 0; i < word.length; i++) {
        let character = word [i];
        
        console.log (character);
    } 
}

characterSequence (["softuni"]);
characterSequence (["ice cream"]);