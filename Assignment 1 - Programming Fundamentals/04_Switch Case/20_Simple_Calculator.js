let num1 = 10;
let num2 = 5;
let operator = "/";

console.log("Supported Operators: +, -, *, /, %");

switch (operator) {
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