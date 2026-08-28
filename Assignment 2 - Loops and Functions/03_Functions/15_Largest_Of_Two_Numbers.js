const input = require('prompt-sync')({ sigint : true });

let number1 = Number(input("Enter 1st number: "));
let number2 = Number(input("Enter 2nd number: "));

function largestOfTwoNumbers(num1, num2) {
    if (num1 > num2) return num1;
    else return num2;
}

console.log(`The greater number is: ${largestOfTwoNumbers(number1, number2)}`);