const input = require('prompt-sync')({ sigint : true });

let num = Number(input("Enter the nth number: "));

function printNumber(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
if (isNaN(num) || num <= 0) {
    console.log("Error: Please enter a valid positive integer.");
}
else {
    printNumber(num);
}