const products = [
    {name: "Laptop", price: 50000},
    {name: "Mouse", price: 500}
];

const updatedProducts = products.map(product => ({...product, inStock: true}));
console.log(updatedProducts);