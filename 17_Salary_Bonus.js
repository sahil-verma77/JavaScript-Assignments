let salary = 50000;
let yOE = 7;

let bonus = 0;
if (yOE >= 10) {
    bonus = salary * 20/100;
}
else if (yOE >= 5) {
    bonus = salary * 10/100;
}
else if (yOE >= 2) {
    bonus = salary * 5/100;
}

console.log(`Original Salary: ${salary}`);
console.log(`Bonus: ${bonus}`);
console.log(`Final Salary: ${salary+bonus}`);