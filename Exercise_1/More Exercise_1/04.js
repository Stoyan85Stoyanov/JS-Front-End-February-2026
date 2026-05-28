function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;
    let shieldBreaks = 0;

    for (let lostFights = 1; lostFights <= lostFightsCount; lostFights++) {
        let helmetBroken = false;
        let swordBroken = false;


        if (lostFights % 2 === 0) {
            helmetCount++;
            helmetBroken = true;
        }


        if (lostFights % 3 === 0) {
            swordCount++;
            swordBroken = true;
        }


        if (helmetBroken && swordBroken) {
            shieldCount++;
            shieldBreaks++;

            
            if (shieldBreaks % 2 === 0) {
                armorCount++;
            }
        }
    }

let helmetExpenses = helmetCount * helmetPrice;
let swordExpenses = swordCount * swordPrice;
let shieldExpenses = shieldCount * shieldPrice;
let armorExpenses = armorCount * armorPrice;

let totalExpenses = helmetExpenses + swordExpenses + shieldExpenses + armorExpenses;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);