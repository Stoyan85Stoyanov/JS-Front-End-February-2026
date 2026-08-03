function studentInformation(name, age, grade) {

    const studentName = name;
    const studentAge = age;
    const studentGrade = grade.toFixed(2);

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade}`);
}

studentInformation('John', 15, 5.54678);
studentInformation('Steve', 16, 2.1426);
studentInformation('Marry', 12, 6.00);


