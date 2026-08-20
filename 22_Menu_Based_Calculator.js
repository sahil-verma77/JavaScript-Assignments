console.log(`1. Addition [+]
2. Subtraction [-]
3. Multiplication [*]
4. Division [/]
5. Modulus [%]`);

const input = require('prompt-sync')();
let num1 = Number(input("Enter 1st number: "));
let num2 = Number(input("Enter 2nd number: "));
let operation = input("Enter the operator symbol: ");

switch (operation) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Division by 0 is not possible");
        }
        else {
            console.log(num1 / num2);
        }
        break;
    case "%":
        if (num2 === 0) {
            console.log("Remainder calculation with 0 is not possible");
        }
        else {
            console.log(num1 % num2);
        }
        break;
    default:
        console.log("Invalid Operator");
}