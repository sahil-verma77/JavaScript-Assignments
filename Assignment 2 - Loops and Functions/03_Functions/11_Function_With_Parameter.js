const input = require('prompt-sync')({ sigint : true });

let userName = input("Enter your name: ");

function greetUser(name) {
    console.log(`Hello, ${name}`);
}
greetUser(userName);