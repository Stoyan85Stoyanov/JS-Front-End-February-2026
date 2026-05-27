function roadRadar(speed, area) {

    let limitSpeed = 0;

    if (area === 'motorway') {
        limitSpeed = 130;

    } else if (area === 'interstate') {
        limitSpeed = 90;

    } else if (area === 'city') {
        limitSpeed = 50;

    } else if (area === 'residential') {
        limitSpeed = 20;
    }

    let difference = speed - limitSpeed;


    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limitSpeed} zone`);

    } else {

        let status = "";

        if (difference <= 20) {
            status = "speeding";

        } else if (difference <= 40) {
            status = "excessive speeding";

        }else{
            status = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limitSpeed} - ${status}`);     
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');