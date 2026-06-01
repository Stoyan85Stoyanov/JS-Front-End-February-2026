function carWash(commands) {

    let valueStart = 0;

    function addSoap() {
        valueStart += 10;
    }

    function addWater() {
        valueStart += valueStart * 0.20;
    }

    function addVacuumCleaner() {
        valueStart += valueStart * 0.25;
    }

    function subtractMud() {
        valueStart -= valueStart * 0.10;
    }

    for (const element of commands) {
        switch (element) {
            case 'soap':
                addSoap();
                break;

            case 'water':
                addWater();
                break;

            case 'vacuum cleaner':
                addVacuumCleaner();
                break;

            case 'mud':
                subtractMud();
                break;
        }
    }

    console.log(`The car is ${valueStart.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);