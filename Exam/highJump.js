function highJump (input) {
    let index = 0;
    let target = input[index];
    let firstHigh = target - 30;
    let jumps = 0;
    let jumpsFail = 0;

    index++;
    let nextJumpHigh = input[index];

    while (index < input.length) {

        if (nextJumpHigh > firstHigh) {
            jumps++;
            jumpsFail = 0;
            firstHigh += 5;

            if (firstHigh > target) {
            console.log(`Tihomir succeeded, he jumped over ${target}cm after ${jumps} jumps.`);
            break;
        }
            
        } else {
            jumps++;
            jumpsFail++;

            if (jumpsFail >= 3) {
                console.log(`Tihomir failed at ${firstHigh}cm after ${jumps} jumps.`);
                break;
            }
        }
            index++;
            nextJumpHigh = input[index];
    }
}

highJump ([231, 205, 212, 213, 228, 229, 230, 235]);
highJump ([250, 225, 224, 225, 228, 231, 235, 234, 235]);