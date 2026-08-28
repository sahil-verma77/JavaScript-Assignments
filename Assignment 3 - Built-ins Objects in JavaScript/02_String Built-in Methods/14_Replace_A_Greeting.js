const input = require('prompt-sync')({ sigint : true });

const greet = "Hello User";

let name = input("Enter your name: ");

let greeting = greet.replace("User", `${name}`);
console.log(greeting);