function solve(input) {

    let n = Number(input.shift());
    let guild = [];

    function addMember(name, role, skills) {
        guild.push({
            name: name,
            role: role,
            skills: skills.split(',').map(s => s.trim())
        });
    }


    for (let i = 0; i < n; i++) {
        let tokens = input.shift().split(' ');
        let name = tokens[0];
        let role = tokens[1];
        let skills = tokens.slice(2).join(' ');
        addMember(name, role, skills);
    }

    function performAction(name, role, skill) {
        const member = guild.find(m => m.name === name);

        if (member && member.role === role && member.skills.includes(skill)) {
            console.log(`${name} has successfully performed the skill: ${skill}!`);

        } else {
            console.log(`${name} cannot perform the skill: ${skill}.`);
        }
    }

    function reassignRole(name, newRole) {
        const member = guild.find(m => m.name === name);

        if (member) {
            member.role = newRole;
            console.log(`${name} has been reassigned to: ${newRole}`);
        }
    }

    function learnSkill(name, newSkill) {
        const member = guild.find(m => m.name === name);

        if (member) {

            if (member.skills.includes(newSkill)) {
                console.log(`${name} already knows the skill: ${newSkill}.`);

            } else {
                member.skills.push(newSkill);
                console.log(`${name} has learned a new skill: ${newSkill}.`);
            }
        }
    }

    let currentCommand = input.shift();

    while (currentCommand !== "End") {
        let [command, ...params] = currentCommand.split(' / ');

        switch (command) {
            case "Perform":
                let [name, role, skill] = params;
                performAction(name, role, skill);
                break;

            case "Reassign":
                let [nameToReassign, newRole] = params;
                reassignRole(nameToReassign, newRole);
                break;

            case "Learn Skill":
                let [nameToLearn, newSkill] = params;
                learnSkill(nameToLearn, newSkill);
                break;
        }

        currentCommand = input.shift();
    }


    guild.forEach(member => {
        let sortedSkills = member.skills.sort((a, b) => a.localeCompare(b));
        console.log(`Guild Member: ${member.name}, Role: ${member.role}, Skills: ${sortedSkills.join(', ')}`);
    });
}


// solve([
//   "3",
//   "Arthur warrior swordsmanship,shield",
//   "Merlin mage fireball,teleport",
//   "Gwen healer healing,alchemy",
//   "Perform / Arthur / warrior / swordsmanship",
//   "Perform / Merlin / warrior / fireball",
//   "Learn Skill / Gwen / purification",
//   "Perform / Gwen / healer / purification",
//   "Reassign / Merlin / healer",
//   "Perform / Merlin / healer / teleport",
//   "End"
// ]
// );


solve([
    "4",
    "Lancelot knight jousting,swordplay",
    "Morgana sorceress dark_magic,illusion",
    "Robin archer archery,stealth",
    "Galahad paladin healing,swordplay",
    "Perform / Robin / archer / archery",
    "Perform / Morgana / knight / illusion",
    "Learn Skill / Lancelot / swordplay",
    "Learn Skill / Robin / tracking",
    "Learn Skill / Robin / tracking",
    "Reassign / Galahad / warrior",
    "Perform / Galahad / warrior / healing",
    "Reassign / Galahad / healer",
    "Perform / Galahad / healer / healing",
    "End"
]
);