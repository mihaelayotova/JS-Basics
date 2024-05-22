function salary (input) {
    let tabCount = Number (input[0]);
    let salary = Number (input[1]);
    
    for (let idx = 2; idx < tabCount + 2; idx++) {
        let sites = input [idx];
        
        switch (sites) {
            case "Facebook": 
                salary -= 150; break;
            case "Instagram":
                salary -= 100; break;
            case "Reddit":
                salary -= 50; break;
        }
    } 

    if (salary <= 0) {
        console.log (`You have lost your salary.`);
    } else {
        console.log (salary);
    }
}

salary (["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary (["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary (["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);