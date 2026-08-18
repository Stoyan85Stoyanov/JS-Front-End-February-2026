function multiplicationTable(number) {

    for (let times = 1; times <= 10; times++) {
        let sumNumber = number * times;
        console.log(`${number} X ${times} = ${sumNumber}`);      
    }

}

multiplicationTable(5);
// multiplicationTable(2);