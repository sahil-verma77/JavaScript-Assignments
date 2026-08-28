const input = require('prompt-sync')();

console.log("********** Electricity Bill **********");
let units = Number(input("Enter the units consumed: "));

let originalBill = 0;
let discount = 10/100;
let finalBill = 0;

if (units < 0) {
    console.log("Error: Enter the valid unit number (greater than or equal to 0).");
    process.exit(1);
}
if (units > 200) {
    originalBill += 100 * 5;
    originalBill += 100 * 7;
    originalBill += (units-200) * 10;
}
else if (units >= 101) {
    originalBill += 100 * 5;
    originalBill += (units-100) * 7;
}
else {
    originalBill += units * 5;
}

console.log(`Units consumed: ${units} units`);
console.log(`Original Bill: ₹${originalBill}`);
if (originalBill >= 2000) {
    finalBill = originalBill - (originalBill * discount);
    console.log(`Discount: 10%`);
}
else {
    finalBill = originalBill;
    console.log(`Discount: N/A`);
}
console.log(`Final Bill: ₹${finalBill}`);