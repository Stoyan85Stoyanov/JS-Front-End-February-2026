function armyLeaderInfo(input) {

    const leaders = {};

    for (let line of input) {

        if (line.includes("arrives")) {
            const leader = line.replace(" arrives", "");

            if (!leaders[leader]) {
                leaders[leader] = {};
            }

        } else if (line.includes(":")) {
            const [leader, armyData] = line.split(": ");

            if (leaders[leader]) {
                const [armyName, armyCount] = armyData.split(", ");
                leaders[leader][armyName] = Number(armyCount);
            }

        } else if (line.includes("+")) {
            const [armyName, count] = line.split(" + ");
            const armyCount = Number(count);

            for (let leader in leaders) {

                if (leaders[leader][armyName] !== undefined) {
                    leaders[leader][armyName] += armyCount;
                    break;
                }
            }

        } else if (line.includes("defeated")) {
            const leader = line.replace(" defeated", "");
            delete leaders[leader];
        }
    }

    
    const sortedLeaders = Object.entries(leaders)
        .map(([leader, armies]) => {
            const totalArmy = Object.values(armies).reduce((a, b) => a + b, 0);
            return { leader, armies, totalArmy };
        })
        .sort((a, b) => b.totalArmy - a.totalArmy);

   
    for (let leaderObj of sortedLeaders) {
        console.log(`${leaderObj.leader}: ${leaderObj.totalArmy}`);
        const sortedArmies = Object.entries(leaderObj.armies)
            .sort((a, b) => b[1] - a[1]);

        for (let [armyName, armyCount] of sortedArmies) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }
}


// armyLeaderInfo(['Rick Burr arrives', 
//     'Fergus: Wexamp, 30245', 
//     'Rick Burr: Juard, 50000', 
//     'Findlay arrives', 
//     'Findlay: Britox, 34540',
//      'Wexamp + 6000', 
//      'Juard + 1350', 
//      'Britox + 4500', 
//      'Porter arrives',
//       'Porter: Legion, 55000', 
//       'Legion + 302', 
//       'Rick Burr defeated', 
//       'Porter: Retix, 3205']);

armyLeaderInfo(
    ['Rick Burr arrives',
        'Findlay arrives',
        'Rick Burr: Juard, 1500',
        'Wexamp arrives',
        'Findlay: Wexamp, 34540',
        'Wexamp + 340',
        'Wexamp: Britox, 1155',
        'Wexamp: Juard, 43423']
);
