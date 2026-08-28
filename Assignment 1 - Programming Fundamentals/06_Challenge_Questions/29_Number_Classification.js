const input = require('prompt-sync')();

let num = Number(input("Enter a number: "));

if (num < 0) console.log("Negative");
else if (num > 0) console.log("Positive");
else console.log("Zero");

if (num % 2 === 0) console.log("Even");
else console.log("Odd");

if (num > 100) console.log("Greater than 100");
else if (num < 100) console.log("Less than 100");
else console.log("Equal to 100");