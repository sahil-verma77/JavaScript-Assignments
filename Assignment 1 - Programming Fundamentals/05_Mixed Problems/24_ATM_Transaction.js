let balance = 100000;
let withdrawAmount = 10000;

if (withdrawAmount > 0 && withdrawAmount <= balance) {
    balance -= withdrawAmount;
    console.log("Withdrawal successful");
    console.log(`Remaining balance: ₹${balance}`);
}
else if (withdrawAmount <= 0) {
    console.log("Error: Please enter a valid amount greater than ₹0.");
}
else {
    console.log("Error: Insufficient balance in your account.");
}