// Comparison Operators
console.log(5 == 5) // Equality Operator
console.log(5 == "5") // Equality operator allows coercion
console.log(5 === "5") // Identity Operator doesn't allow coercion

console.log(5 != "5") // Inequality Operator (allows coercion)
console.log(5 !== "5") // Strict Inequality Operator (doesn't allows coercion)

console.log(5 < 7 ? 'Pesho' : 'Gosho') // Ternary Operator

// Conditional Statements
let age = 17;
if (age >= 18) {
    console.log('Authorize Payment!');
} else if (age === 17) {
    console.log('Try again next year!');
} else {
    console.log('Try again later!');
}

// Switch statement
let product = 'food';
switch (product) {
    case 'water':
        console.log('Drink water!');
        break;
    case 'food':
        console.log('Eat food!');
        break;
    default:
        console.log('Unknown product');
        break;
}

// Truty and falsy values
let value = 'Pesho';
if (value) {
    console.log('This value is truty!');
} else {
    console.log('This value is falsy!');
}

// Expression vs Statement
// Expresion -> returns value
// Statement -> makes action
let number = 5;

// Statement
if (number < 10) {
    console.log('Success!');
} else {
    console.log('Fail!');
}

// Expression
console.log(number < 10 ? 'Success!' : 'Fail!');
