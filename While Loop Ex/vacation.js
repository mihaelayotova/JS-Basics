function vacantion (input) {
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let command = input[index];

    let daysToSpend = 0;
    let days = 0;

    while (neededMoney > availableMoney) {
        days++;

        switch (command) {
            case "spend":
                daysToSpend++;
                if (daysToSpend === 5) {
                    console.log(`You can't save the money.\n${days}`);
                    break;
            }
                index++;
                let spendMoney = Number(input[index]);
                availableMoney -= spendMoney;
                if (availableMoney < 0) {
                        availableMoney = 0;
                    } break;

            case "save":
                daysToSpend = 0;
                index++;

                let savedMoney = Number(input[index]);
                availableMoney += savedMoney;
                break;
        }
            index++;
            command = input[index];

        
        if (availableMoney >= neededMoney) {
            console.log(`You saved the money for ${days} days.`);
        }   
        
        if (index >= input.length) {
            break;
        }
    }     
}  

vacantion (["2000","1000","spend","1200","save","2000"]);
vacantion (["110","60","spend","10","spend","10","spend","10","spend","10","spend", "10"]);
vacantion (["250","150","spend","50","spend","50","save","100","save","100"]);
vacantion (["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"]);