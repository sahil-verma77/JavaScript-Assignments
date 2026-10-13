const orderAmount = [
    { amount: 500 },
    { amount: 1000 },
    { amount: 750 }
];

// const totalOrderAmount = orderAmount.reduce((count, item) => count + item.amount, 0);

// // Or
const totalOrderAmount = orderAmount.reduce((acc, { amount }) => acc + amount, 0);
console.log(totalOrderAmount);