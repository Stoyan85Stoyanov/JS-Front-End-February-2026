function N_x_N_Matrix(number) {

    function getRowAndColumn() {
        let result = [];

        for (let i = 0; i < number; i++) {
            result.push(number);
        }

        return result;
    }


    for (let i = 0; i < number; i++) {
        console.log(getRowAndColumn().join(" "));
    }
    
}

N_x_N_Matrix(3);
N_x_N_Matrix(7);
N_x_N_Matrix(2);