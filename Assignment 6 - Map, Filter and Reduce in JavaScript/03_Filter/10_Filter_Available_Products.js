const products = [
    {name: "Laptop", inStock: true},
    {name: "Mouse", inStock: false}
];

const stockProducts = products.filter((product) => product.inStock);
console.log(stockProducts);