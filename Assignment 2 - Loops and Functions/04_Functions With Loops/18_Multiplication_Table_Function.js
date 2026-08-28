const input = require('prompt-sync')({ sigint : true });

let number = Number(input("Enter a number: "));

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}
if (isNaN(number) || number < 0) {
    console.log("Error: Please enter a valid number (greater or equals to 0).");
}
else {
    printTable(number);
}