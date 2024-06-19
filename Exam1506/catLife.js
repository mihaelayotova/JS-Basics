function catLife (input){
    let catType = input[0];
    let gender = input[1];
    let catLife = 0;

    if (gender === 'm'){
        switch(catType){
            case "British Shorthair": 
                catLife = 13 * 2; break;
            case "Siamese":
                catLife = 15 * 2; break;
            case "Persian":
                catLife = 14 * 2; break;
            case "Ragdoll":
                catLife = 16 * 2; break;
            case "American Shorthair":
                catLife = 12 * 2; break;
            case "Siberian":
                catLife = 11 * 2; break;
            default: 
                console.log(`${catType} is invalid cat!`); 
                break;
        }
    } else if (gender === 'f'){
        switch(catType){
            case "British Shorthair": 
                catLife = 14 * 2; break;
            case "Siamese":
                catLife = 16 * 2; break;
            case "Persian":
                catLife = 15 * 2; break;
            case "Ragdoll":
                catLife = 17 * 2; break;
            case "American Shorthair":
                catLife = 13 * 2; break;
            case "Siberian":
                catLife = 12 * 2; break;
            default: 
                console.log(`${catType} is invalid cat!`);
                break;
        }
    }

    if (catLife > 0){
        console.log(`${Math.floor(catLife)} cat months`);
    }
}

catLife(["Persian","m"]);
catLife(["Siamese","f"]);
catLife(["Siberian","m"]);
catLife(["Tom","m"]); 