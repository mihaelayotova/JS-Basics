function password (input) {
    let index = 0;
    let username = input [index];
    index ++;

    let password = input [index];
    index++;
    let pass = input [index];
    index++;

    while (true) {
            if (pass !== password) {
            password = input [index];
            index++;} 
            break;
        } console.log(`Welcome ${username}!`);
    }

password (["Nakov", "1234", "Pass", "1324", "1234"]);
password (["Gosho", "secret", "secret"]);