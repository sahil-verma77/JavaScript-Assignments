const input = require(`prompt-sync`)();
let age = Number(input("Enter your age: "));
let numberOfTickets = Number(input("Enter number of tickets for booking: "));
let totalTicketPrice = 0;

if (age < 0) {
    console.log("Error: Please enter a valid age.");
    process.exit(1);
}
if (numberOfTickets <= 0) {
    console.log("Error: Please enter a valid number of tickets (greater than 0).");
    process.exit(1);
}

if (age >= 60) totalTicketPrice = numberOfTickets * 120;
else if (age >= 12) totalTicketPrice = numberOfTickets * 200;
else totalTicketPrice = numberOfTickets * 100;

console.log(`Total ticket price: ₹${totalTicketPrice}`);