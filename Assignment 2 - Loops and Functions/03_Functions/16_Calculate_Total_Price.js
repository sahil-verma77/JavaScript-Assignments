const input = require('prompt-sync')({ sigint : true });

let priceOfProduct = Number(input("Enter the price: "));
let quantityOfProduct = Number(input("Enter the quantity: "));

function calculateTotal(price, quantity) {
    return price * quantity;
}

if (isNaN(priceOfProduct) || isNaN(quantityOfProduct)) {
    console.log("Error: Please enter a valid number.");
}
else if (priceOfProduct <= 0 || quantityOfProduct <= 0) {
    console.log("Error: Price and Quantity must be greater than 0.");
}
else {
    let totalPrice = calculateTotal(priceOfProduct, quantityOfProduct);
    console.log(`Total Price: ₹${totalPrice.toFixed(2)}`);
}
