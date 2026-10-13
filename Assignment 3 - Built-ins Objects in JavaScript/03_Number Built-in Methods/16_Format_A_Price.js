const input = require('prompt-sync')({ sigint : true });

let price = Number(input("Enter a number: "));

let formatPrice = price.toFixed(2);
console.log(formatPrice);