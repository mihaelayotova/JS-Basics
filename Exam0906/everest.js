function everest (input){
    let index = 0;
    let command = input[index];

    let days = 1;
    let begin = 5364;

    let isFinish = false;

    while (command !== "END"){
        let overnight = command;

        if (overnight === "Yes"){
            days++;
        }
        
        if (days > 5 && begin < 8848){
            console.log(`Failed!\n${begin}`);
            isFinish = true;
            break;
        } else if (days <= 5 && begin >= 8848){
            console.log(`Goal reached for ${days} days!`);
            isFinish = true;
            break;
        }

        index++;
        let meters = Number(input[index]);
        begin += meters;

        index++;
        command = input[index];
    }

    if (!isFinish){
        console.log(`Failed!\n${begin}`);
    }
}

// everest(["Yes","1254","Yes","1402","No","250","Yes","635"]);
// everest(["Yes","1000","Yes","945","No","1200","END"]);
everest(["Yes","535","Yes","849","Yes","499","Yes","400","Yes","500"])
