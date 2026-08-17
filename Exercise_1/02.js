// function vacation(groupSize, groupType, weekDay) {

//     let singlePrice = 0;
//     let totalPrice = 0;

//     switch (groupType) {

//         case 'Students':

//             if (weekDay === 'Friday') {
//                 singlePrice = 8.45;

//             } else if (weekDay === 'Saturday') {
//                 singlePrice = 9.80;

//             } else if (weekDay === 'Sunday') {
//                 singlePrice = 10.46;
//             }

//             break;

//         case 'Business':

//             if (weekDay === 'Friday') {
//                 singlePrice = 10.90;

//             } else if (weekDay === 'Saturday') {
//                 singlePrice = 15.60;

//             } else if (weekDay === 'Sunday') {
//                 singlePrice = 16;
//             }

//             break;

//         case 'Regular':

//             if (weekDay === 'Friday') {
//                 singlePrice = 15;

//             } else if (weekDay === 'Saturday') {
//                 singlePrice = 20;

//             } else if (weekDay === 'Sunday') {
//                 singlePrice = 22.50;
//             }

//             break;
//     }

//     totalPrice = singlePrice * groupSize;

//     if(groupType === 'Students' && groupSize >= 30) {
//            totalPrice *= 0.85;

//     } else if (groupType === 'Business' && groupSize >= 100) {
//            totalPrice -= singlePrice * 10;

//     } else if (groupType === 'Regular' && groupSize >= 10 && groupSize <= 20) {
//            totalPrice *= 0.95;

//     }

//     console.log(`Total price: ${totalPrice.toFixed(2)}`);
// }



function vacation(groupSize, groupType, weekDay) {

    let singlePrice = getSinglePrice(groupType, weekDay);

    let totalPrice = singlePrice * groupSize;

    if (groupType === 'Students' && groupSize >= 30) {
        totalPrice *= 0.85;

    } else if (groupType === 'Business' && groupSize >= 100) {
        totalPrice -= singlePrice * 10;

    } else if (groupType === 'Regular' && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95;

    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);


    function getSinglePrice(groupType, weekDay) {

        switch (groupType) {

            case 'Students':
                return getStudentPrice(weekDay);

            case 'Business':
                return getBusinessPrice(weekDay);

            case 'Regular':
                return getRegularPrice(weekDay);
        }
    }

    function getStudentPrice(weekDay) {

        if (weekDay === 'Friday') {
            return 8.45;

        } else if (weekDay === 'Saturday') {
            return 9.80;

        } else if (weekDay === 'Sunday') {
            return 10.46;
        }
    }

    function getBusinessPrice(weekDay) {

        if (weekDay === 'Friday') {
            return 10.90;

        } else if (weekDay === 'Saturday') {
            return 15.60;

        } else if (weekDay === 'Sunday') {
            return 16;
        }
    }

    function getRegularPrice(weekDay) {

        if (weekDay === 'Friday') {
            return 15;

        } else if (weekDay === 'Saturday') {
            return 20;

        } else if (weekDay === 'Sunday') {
            return 22.50;
        }
    }
}


vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");