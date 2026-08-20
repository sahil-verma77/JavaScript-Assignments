const input = require('prompt-sync')();

console.log(`********** ATM Menu **********
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit`);

let balance = 100000;
let depositMoney;
let withdrawMoney;
let option = Number(input("Enter the option number to continue: "));

switch (option) {
    case 1:
        console.log(`Current Balance: ₹${balance}`);
        break;
    case 2:
        depositMoney = Number(input("Enter the amount to add: "));
        if (depositMoney < 0) {
            console.log("Error: Please enter a valid amount to deposit.");
        }
        else {
            balance += depositMoney;
            console.log(`Amount of ₹${depositMoney} added to your account successfully!`);
            console.log(`Current Balance: ₹${balance}`);
        }
        break;
    case 3:
        withdrawMoney = Number(input("Enter the amount to withdraw: "));
        if(withdrawMoney > 0 && withdrawMoney <= balance) {
            balance -= withdrawMoney;
            console.log(`Amount of ₹${withdrawMoney} withdrawn from your account successfully!`);
            console.log(`Current Balance: ₹${balance}`);
        }
        else if (withdrawMoney <= 0) {
            console.log("Error: Please enter a valid amount to withdraw (greater than ₹0).");
        }
        else {
            console.log("Error: Insufficient funds in your account.");
        }
        break;
    case 4:
        console.log("Thank you ♥, for choosing our services. Have a nice day!");
        break;
    default:
        console.log("Error: Invalid Choice. Please select a valid menu option");

}