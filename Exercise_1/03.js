function leapYear(year) {
     
    const divisibleByFour = year % 4 === 0;
    const divisibleByOneHundred = year % 100 === 0;
    const divisibleByFourHundred = year % 400 === 0;

    if (divisibleByFour && (divisibleByFourHundred || !divisibleByOneHundred)) {
         console.log('yes');
         
    }else {
        console.log('no');
         
    }
}

leapYear(1984);
leapYear(2003);
leapYear(4);

leapYear(2013);
leapYear(2017);
leapYear(1900);