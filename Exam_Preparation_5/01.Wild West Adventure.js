// function solve(input) {

//     const characters = {};
//     const characterCount = Number(input.shift());

//     for (let i = 0; i < characterCount; i++) {
//         const [heroName, hp, bullets] = input.shift().split(" ");
//         characters[heroName] = { hp: Number(hp), bullets: Number(bullets) };
//     }


//     let commands = input.shift();

//     while (commands !== "Ride Off Into Sunset") {
//         const [command, heroName, ...args] = commands.split(" - ");

//         switch (command) {
//             case "FireShot":
//                 const target = args[0];

//                 if (characters[heroName].bullets > 0) {
//                     characters[heroName].bullets--;
//                     console.log(`${heroName} has successfully hit ${target} and now has ${characters[heroName].bullets} bullets!`);

//                 } else {
//                     console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
//                 }

//                 break;


//             case "TakeHit":
//                 const damage = Number(args[0]);
//                 const attacker = args[1];

//                 characters[heroName].hp -= damage;

//                 if (characters[heroName].hp > 0) {
//                     console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${characters[heroName].hp} HP!`);

//                 } else {
//                     console.log(`${heroName} was gunned down by ${attacker}!`);
//                     delete characters[heroName];
//                 }

//                 break;


//             case "Reload":
//                 const maximumCapacityBullets = 6;
//                 const bulletsReloaded = maximumCapacityBullets - characters[heroName].bullets;

//                 if (bulletsReloaded > 0) {
//                     characters[heroName].bullets = maximumCapacityBullets;
//                     console.log(`${heroName} reloaded ${bulletsReloaded} bullets!`);

//                 } else {
//                     console.log(`${heroName}'s pistol is fully loaded!`);
//                 }

//                 break;


//             case "PatchUp":
//                 const amount = Number(args[0]);

//                 const oldHp = characters[heroName].hp;
//                 characters[heroName].hp = Math.min(oldHp + amount, 100);
//                 const amountRecovered = characters[heroName].hp - oldHp;

//                 if (amountRecovered > 0) {
//                     console.log(`${heroName} patched up and recovered ${amountRecovered} HP!`);


//                 } else {
//                     console.log(`${heroName} is in full health!`);
//                 }

//                 break;
//         }

//         commands = input.shift();
//     }

//     for (const name in characters) {
//         console.log(name);
//         console.log(`  HP: ${characters[name].hp}`);
//         console.log(`  Bullets: ${characters[name].bullets}`);
//     }
// }


function solve(input) {

    const heroes = {};
    const count = Number(input.shift());

    
    for (let i = 0; i < count; i++) {

        const [name, hp, bullets] = input.shift().split(" ");

        heroes[name] = {
            hp: Number(hp),
            bullets: Number(bullets)
        };
    }

    let line = input.shift();

    while (line !== "Ride Off Into Sunset") {
        const [command, name, ...params] = line.split(" - ");

        if (command === "FireShot") {
            fireShot(heroes, name, params[0]);

        } else if (command === "TakeHit") {
            takeHit(heroes, name, Number(params[0]), params[1]);
        

        } else if (command === "Reload") {
            reload(heroes, name);
        

        } else if (command === "PatchUp") {
            patchUp(heroes, name, Number(params[0]));
        
        }

        line = input.shift();
    }

   
    for (const name in heroes) {
        console.log(name);
        console.log(`  HP: ${heroes[name].hp}`);
        console.log(`  Bullets: ${heroes[name].bullets}`);
    }


   
    function fireShot(heroes, name, target) {
        if (heroes[name].bullets > 0) {
            heroes[name].bullets--;
            console.log(`${name} has successfully hit ${target} and now has ${heroes[name].bullets} bullets!`);
        } else {
            console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
        }
    }


    function takeHit(heroes, name, damage, attacker) {
        heroes[name].hp -= damage;

        if (heroes[name].hp > 0) {
            console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${heroes[name].hp} HP!`);

        } else {
            console.log(`${name} was gunned down by ${attacker}!`);
            delete heroes[name];
        }
    }


    function reload(heroes, name) {
        const maxBullets = 6;
        const currentBullets = heroes[name].bullets;

        if (currentBullets < maxBullets) {
            const reloaded = maxBullets - currentBullets;
            heroes[name].bullets = maxBullets;
            console.log(`${name} reloaded ${reloaded} bullets!`);

        } else {
            console.log(`${name}'s pistol is fully loaded!`);
        }
    }

    
    function patchUp(heroes, name, amount) {

        const maxHP = 100;
        const currentHP = heroes[name].hp;

        if (currentHP === maxHP) {
            console.log(`${name} is in full health!`);
            return;
        }

        const newHP = Math.min(currentHP + amount, maxHP);
        const healed = newHP - currentHP;

        heroes[name].hp = newHP;
        console.log(`${name} patched up and recovered ${healed} HP!`);
    }
}


solve((["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"])
);

// solve((["2",
//     "Jesse 100 4",
//     "Walt 100 5",
//     "FireShot - Jesse - Bandit",
//     "TakeHit - Walt - 30 - Bandit",
//     "PatchUp - Walt - 20",
//     "Reload - Jesse",
//     "Ride Off Into Sunset"])
// );

// solve((["2",
//     "Gus 100 4",
//     "Walt 100 5",
//     "FireShot - Gus - Bandit",
//     "TakeHit - Walt - 100 - Bandit",
//     "Reload - Gus",
//     "Ride Off Into Sunset"])
// );