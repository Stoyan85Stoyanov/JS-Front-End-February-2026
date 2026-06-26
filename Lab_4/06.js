function meetings(arrayOfStrings) {

    let successfulMeetings = {};

    for (let meetings of arrayOfStrings) {

        let [weekday, name] = meetings.split(' ');

        // проверка дали денят е зает !!!
        if (weekday in successfulMeetings) {
            console.log(`Conflict on ${weekday}!`);

        } else {
            successfulMeetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    let entries = Object.entries(successfulMeetings);

    for (let [weekday, name] of entries) {
        console.log(`${weekday} -> ${name}`);
    }
   
}

// meetings(['Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim']
// );


meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);

