const products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
];

const stockProducts = products.filter((product) => product.inStock);

// // Or
// const stockProducts = products.filter((product) => {
//     if (product.inStock) {
//         return product;
//     }
// });
console.log(stockProducts);