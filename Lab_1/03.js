// function excellentGrade(grade) {
    
//     if(grade >= 5.50){
//       console.log("Excellent");  

//     }else{
//         console.log("Not excellent");
//     }   
// }


// function excellentGrade(grade) {
//     if (grade >= 5.50) {
//         console.log("Excellent");
//         return;
//     }

//     console.log("Not excellent");
// }


function excellentGrade(grade) {
    let results;

    if (grade >= 5.50) {
        results = "Excellent";

    } else {
        results = "Not excellent";
    }

    console.log(results);
}


excellentGrade(5.50);
excellentGrade(4.35);
