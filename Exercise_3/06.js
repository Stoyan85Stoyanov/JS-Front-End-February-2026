function passwordValidator(password) {

    function validatePassword(password) {

        let errors = [];

        if (password.length < 6 || password.length > 10) {
            errors.push("Password must be between 6 and 10 characters");
        }

        let lettersCount = 0;
        let digitsCount = 0;

        for (let i = 0; i < password.length; i++) {

            if (('a' <= password[i] && password[i] <= 'z') || ('A' <= password[i] && password[i] <= 'Z')) {
                lettersCount++;

            } else if ('0' <= password[i] && password[i] <= '9') {
                digitsCount++;
            }

        }

        let sumLettersAndDigits = lettersCount + digitsCount;

        if (sumLettersAndDigits !== password.length) {
            errors.push("Password must consist only of letters and digits");
        }

        if (digitsCount < 2) {
            errors.push("Password must have at least 2 digits");
        }

        return errors;
    }

    let resultValidPassword = validatePassword(password);
    
     if (resultValidPassword.length === 0) {
          console.log("Password is valid");
          
     } else {
         resultValidPassword.forEach((a) => console.log(a));
         
     }
    
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
