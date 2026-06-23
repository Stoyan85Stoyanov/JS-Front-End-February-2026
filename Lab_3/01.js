function formatGrade (gradeNumber) {

    if (gradeNumber < 3.00) {
        console.log('Fail (2)');
        
    } else if (gradeNumber < 3.50) {
        console.log(`Poor (${gradeNumber.toFixed(2)})`);

    } else if (gradeNumber < 4.50) {
        console.log(`Good (${gradeNumber.toFixed(2)})`);

    } else if (gradeNumber < 5.50) {
        console.log(`Very good (${gradeNumber.toFixed(2)})`);

    } else {
        console.log(`Excellent (${gradeNumber.toFixed(2)})`);
        
    }  
}

formatGrade (3.33);
formatGrade (4.50);
formatGrade (2.99);