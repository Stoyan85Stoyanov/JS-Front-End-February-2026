function solve(inputData) {

    const astronauts = [];
    // On the first line of the input, 
    // you will receive an integer n – the number of astronauts in your crew.
    let n = Number(inputData[0]);

    // "2",
    //"Alice command_module piloting,communications",
    //"Bob engineering_bay repair,maintenance",
    for (let i = 1; i <= n; i++) {
        let line = inputData[i];
        let [name, section, skills] = line.split(" ");

        let astronaut = {
            name: name,
            section: section,
            skills: skills.split(",")
        }

        astronauts.push(astronaut);
    }

    //  "Perform / Alice / command_module / piloting",
    for (let i = n + 1; inputData.length; i++) {
        let items = inputData[i].split(" / ");
        let commands = items[0];
    
        let astronautName = items[1];

        if (commands === "End") {
            break;
        }

        let currentAstronaut = astronauts.find((astronaut) => astronaut.name === astronautName);

        switch (commands) {
            case "Perform":
                let section = items[2];
                let skill = items[3];

                if (currentAstronaut.section === section && currentAstronaut.skills.includes(skill)) {
                    console.log(`${astronautName} has successfully performed the skill: ${skill}!`);

                } else {
                    console.log(`${astronautName} cannot perform the skill: ${skill}.`);
                }

                break;

            case "Transfer":
                let newSection = items[2];
                currentAstronaut.section = newSection;

                console.log(`${astronautName} has been transferred to: ${newSection}`);

                break;

            case "Learn Skill":
                let newSkill = items[2];

                if (currentAstronaut.skills.includes(newSkill)) {
                    console.log(`${astronautName} already knows the skill: ${newSkill}.`);

                } else {
                    console.log(`${astronautName} has learned a new skill: ${newSkill}.`);
                    currentAstronaut.skills.push(newSkill);
            }
        }
    }

    astronauts.forEach(astronaut => {
        let skills = astronaut.skills.sort((x, y) => x.localeCompare(y));
        console.log(`Astronaut: ${astronaut.name}, Section: ${astronaut.section}, Skills: ${skills.join(", ")}`);

    });
}


// solve([
//     "2",
//     "Alice command_module piloting,communications",
//     "Bob engineering_bay repair,maintenance",
//     "Perform / Alice / command_module / piloting",
//     "Perform / Bob / command_module / repair",
//     "Learn Skill / Alice / navigation",
//     "Perform / Alice / command_module / navigation",
//     "Transfer / Bob / command_module",
//     "Perform / Bob / command_module / maintenance",
//     "End"
// ]
// );

solve([
    "3",
    "Tom engineering_bay construction,maintenance",
    "Sara research_lab analysis,sampling",
    "Chris command_module piloting,communications",
    "Perform / Tom / engineering_bay / construction",
    "Learn Skill / Sara / robotics",
    "Perform / Sara / research_lab / robotics",
    "Transfer / Chris / research_lab",
    "Perform / Chris / research_lab / piloting",
    "Learn Skill / Tom / diagnostics",
    "Perform / Tom / engineering_bay / diagnostics",
    "End"]
);