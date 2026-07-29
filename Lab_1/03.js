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
    let result;

    if (grade >= 5.50) {
        result = "Excellent";

    } else {
        result = "Not excellent";
    }

    console.log(result);
}


excellentGrade(5.50);
excellentGrade(4.35);
