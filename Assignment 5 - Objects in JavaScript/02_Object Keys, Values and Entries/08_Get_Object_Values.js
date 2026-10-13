const product = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
};

const productValues = Object.values(product);
// returns array of values --> [ 'Laptop', 50000, 'Electronics' ]

console.log(productValues);