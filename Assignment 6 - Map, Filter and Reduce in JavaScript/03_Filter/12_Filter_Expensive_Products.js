const products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

// const expensiveProducts = products.filter((product) => product.price > 1000);

// // Or
// const expensiveProducts = products.filter(({ name, price }) => price > 1000); // Destructuring
const expensiveProducts = products.filter(({ price }) => price > 1000); // Destructuring
console.log(expensiveProducts);