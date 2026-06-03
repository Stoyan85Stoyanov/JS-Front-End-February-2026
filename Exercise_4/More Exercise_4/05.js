function schoolRegister(input) {

    const register = {};

    for (let line of input) {
        let [namePart, gradePart, scorePart] = line.split(", ");

        let name = namePart.split(": ")[1];
        let grade = Number(gradePart.split(": ")[1]);
        let score = Number(scorePart.split(": ")[1]);

        if (score < 3) {
            continue;
        }

        let nextGrade = grade + 1;

        if (!register[nextGrade]) {
            register[nextGrade] = {
                students: [],
                scores: []
            };
        }

        register[nextGrade].students.push(name);
        register[nextGrade].scores.push(score);
    }

    Object.keys(register)
        .sort((a, b) => a - b)
        .forEach(grade => {
            let students = register[grade].students;
            let scores = register[grade].scores;

            let avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;

            console.log(`${grade} Grade`);
            console.log(`List of students: ${students.join(", ")}`);
            console.log(`Average annual score from last year: ${avgScore.toFixed(2)}`);
            console.log();
        });
}


schoolRegister([
"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
);


// schoolRegister([
// 'Student name: George, Grade: 5, Graduated with an average score: 2.75',
// 'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
// 'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
// 'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
// 'Student name: John, Grade: 9, Graduated with an average score: 2.90',
// 'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
// 'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ]
// );

