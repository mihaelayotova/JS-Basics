function coins (input) {
    let money = Number(input[0]);
    let moneyIncoins = Math.floor(money * 100);
    let coins = 0;

    while (moneyIncoins > 0) {
        if (moneyIncoins >= 200) {
            moneyIncoins -= 200;
            coins++;
        } else if (moneyIncoins >= 100) {
            moneyIncoins -= 100;
            coins++;
        } else if (moneyIncoins >= 50) {
            moneyIncoins -= 50;
            coins++;
        }else if (moneyIncoins >= 20) {
            moneyIncoins -= 20;
            coins++;
        }else if (moneyIncoins >= 10) {
            moneyIncoins -= 10;
            coins++;      
        }else if (moneyIncoins >= 5) {
            moneyIncoins -= 5;
            coins++;
        }else if (moneyIncoins >= 2) {
            moneyIncoins -= 2;
            coins++;
        }else if (moneyIncoins >= 1) {
            moneyIncoins -= 1;
            coins++;
        }
        
        if (moneyIncoins === 0) {
        console.log(coins);
    }
    }
}

coins (["1.23"]);
coins (["2"]);
coins (["0.56"]);
coins (["2.73"]);