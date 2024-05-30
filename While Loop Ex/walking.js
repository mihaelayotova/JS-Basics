function walking (input) {
    let target = 10000;
    let steps = 0;

    let index = 0; 
    let command = input [index];

    while (command !== "Going home") {
        command = Number(input [index]);
        steps += command; 

        if (steps >= target) {
        console.log(`Goal reached! Good job!\n${Math.abs(steps - target)} steps over the goal!`);
        break;
        }

        index++;
        command = (input[index]); 
    }

        if (command === "Going home") {
            index++;
            command = Number(input[index]);
            steps += command;

            if (steps < target) {
            console.log(`${Math.abs(steps - target)} more steps to reach goal.`);
        } else {
            console.log(`Goal reached! Good job!\n${Math.abs(steps - target)} steps over the goal!`);
        }
        }
    }

walking (["1000","1500","2000","6500"]);
walking (["1500", "300", "2500", "3000", "Going home", "200"]);
walking (["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking (["125", "250", "4000", "30", "2678", "4682"]);