const input = require('prompt-sync')({ sigint : true });

let number = Number(input("Enter a number: "));

function squareOfANumber(num) {
    return num * num;
}
console.log(`Square is: ${squareOfANumber(number)}`);