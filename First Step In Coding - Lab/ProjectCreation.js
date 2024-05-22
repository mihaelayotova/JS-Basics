function projectCreation (input) {
    let nameArchitect = (input [0]);
    let numberProjects = Number (input[1]);
    let workHours = numberProjects * 3; 

    console. log(`The architect ${nameArchitect} will need ${workHours} hours to complete ${numberProjects} project/s.`);
}

projectCreation (["George ", "4 "]);
projectCreation (["Sanya ", "9 "]);