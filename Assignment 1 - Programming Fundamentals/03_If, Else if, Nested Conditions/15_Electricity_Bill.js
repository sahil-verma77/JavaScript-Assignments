let consumedUnits = 250;

let first100 = 5;
let next100 = 7;
let above200 = 10;

let finalBill = 0;

if (consumedUnits > 200) {
    finalBill += 100 * first100;
    finalBill += 100 * next100;
    finalBill += (consumedUnits-200) * above200;
}
else if (consumedUnits > 100) {
    finalBill += 100 * first100;
    finalBill += (consumedUnits-100) * next100;
}
else {
    finalBill += consumedUnits * first100;
}

console.log(`Final Bill: ${finalBill}`);