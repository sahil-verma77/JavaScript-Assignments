const input = require("prompt-sync")();

console.log(`********** Restaurant Menu: **********
1. Burger --> ₹150
2. Pizza --> ₹250
3. Pasta --> ₹180
4. Sandwich --> ₹120`);

let choice = Number(input("Enter your choice number: "));
let quantity = Number(input("Enter the quantity: "));
let totalPrice = 0;

if (quantity < 0) {
    console.log("Error: Quantity must be greater than 0.");
    process.exit(1);
}

switch (choice) {
    case 1:
        totalPrice = 150 * quantity;
        console.log(`Ordered: ${quantity} x Burger | Total Bill: ₹${totalPrice}`);
        break;
    case 2:
        totalPrice = 250 * quantity;
        console.log(`Ordered: ${quantity} x Pizza │ Total Bill: ₹${totalPrice}`);
        break;
    case 3:
        totalPrice = 180 * quantity;
        console.log(`Ordered: ${quantity} x Pasta │ Total Bill: ₹${totalPrice}`);
        break;
    case 4:
        totalPrice = 120 * quantity;
        console.log(`Ordered: ${quantity} x Sandwich │ Total Bill: ₹${totalPrice}`);
        break;
    default:
        console.log("Invalid C hoice number entered.");
}