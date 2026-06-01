function radioCrystals(input) {

    let target = input[0];
    let crystals = input.slice(1);

    crystals.forEach(initial => {
        console.log(`Processing chunk ${initial} microns`);

        let thickness = initial;

        function cut() {
            let count = 0;
            while (thickness / 4 >= target) {
                thickness /= 4;
                count++;
            }

            if (count) {
                console.log(`Cut x${count}`);
                transport();
            }
        }

        function lap() {
            let count = 0;
            while (thickness * 0.8 >= target) {
                thickness *= 0.8;
                count++;
            }

            if (count) {
                console.log(`Lap x${count}`);
                transport();
            }
        }

        function grind() {
            let count = 0;
            while (thickness - 20 >= target) {
                thickness -= 20;
                count++;
            }

            if (count) {
                console.log(`Grind x${count}`);
                transport();
            }
        }

        function etch() {
            let count = 0;
            while (thickness - 2 >= target - 1) {
                thickness -= 2;
                count++;
            }

            if (count) {
                console.log(`Etch x${count}`);
                transport();
            }
        }

        function xray() {
            if (thickness < target) {
                thickness += 1;
                console.log("X-ray x1");
            }
        }

        function transport() {
            thickness = Math.floor(thickness);
            console.log("Transporting and washing");
        }


        let operations = [cut, lap, grind, etch, xray];
        operations.forEach(op => op());

        console.log(`Finished crystal ${thickness} microns`);
    });
}


radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);