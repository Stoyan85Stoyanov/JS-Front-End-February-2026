function inventory(arrayOfStrings) {

    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;

        }
    }

    let heroes = [];

    for (const element of arrayOfStrings) {
        const arrayElement = element.split(" / ");

        let name = arrayElement[0];
        let level = Number(arrayElement[1]);

        let items;

        if (arrayElement.length > 2) {
            items = arrayElement[2].split(", ");

        } else {
            items = [];

        }

        heroes.push(new Hero(name, level, items));
    }

    heroes.sort((x, y) => x.level - y.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}
level => ${hero.level}
items => ${hero.items.join(", ")}`);
        // console.log(`Hero: ${hero.name}`);
        // console.log(`level => ${hero.level}`);
        // console.log(`items => ${hero.items.join(", ")}`);
    }
}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);