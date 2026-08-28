const input = require('prompt-sync')({ sigint : true });

let number = Number(input("Enter a number: "));

function evenOddFunction(num) {
    if (num%2 == 0) return "Even";
    else return "Odd";
}
console.log(`The given number is: ${evenOddFunction(number)}`);