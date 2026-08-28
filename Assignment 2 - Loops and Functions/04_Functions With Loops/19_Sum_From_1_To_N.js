const input = require('prompt-sync')({ sigint : true });

let num = Number(input("Enter a number: "));
let roundOffNum = Math.round(num);

function sumNumber(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += i;
    }
    return count;
}
if (isNaN(num) || num <= 0) {
    console.log("Error: Please enter a valid positive number.");
}
else {
    if (num != roundOffNum) {
        console.log(`Note: Rounded your input to ${roundOffNum}`);
    }
    let sum = sumNumber(roundOffNum);
    console.log(sum);
}