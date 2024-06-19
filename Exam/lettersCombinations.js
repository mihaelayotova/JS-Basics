function lettersCombinations (input){
    let beginLetter = input[0];
    let endLetter = input[1];
    let notIncludeLetter = input[2];

    for (let u = beginLetter; beginLetter !== endLetter; beginLetter++){
        for (let n = beginLetter; beginLetter !== endLetter; beginLetter++){
            for (let i = beginLetter; beginLetter !== endLetter; beginLetter++){
            
                    console.log(`${u} ${n} ${i}`);
                }
            }
        }
    }


lettersCombinations (["a","c","b"]);