function giftsFromSanta (input){
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let buff = '';

    for (let u = m; u >= n; u--){
        if (u % 2 === 0 && u % 3 === 0){
            if (u !== s){
                buff += u + ' ';
                
            } else {
                break;
            }
        } 
    }
    console.log(buff);
}

giftsFromSanta(["1","30","15"]);
giftsFromSanta(["1","36","12"]);
giftsFromSanta(["20","1000","36"]);