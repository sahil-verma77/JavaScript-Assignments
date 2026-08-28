const input = require('prompt-sync')({ sigint : true });

let number1 = Number(input("Enter 1st number: "));
let number2 = Number(input("Enter 2nd number: "));

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(`The sum is: ${addTwoNumbers(number1, number2)}`);
