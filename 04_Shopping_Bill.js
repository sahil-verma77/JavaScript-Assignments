let productPrice = 150;
let quantity = 5;

let discount = 10/100;

let originalBill = 150*5;
let discountAmount = originalBill * discount;
let finalBill = originalBill - discountAmount;

console.log(`Original Bill: ${originalBill}`);
console.log(`Discount Amount: ${discountAmount}`);
console.log(`Final Bill: ${finalBill}`);