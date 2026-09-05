const productNames = ["Laptop", "Mouse", "Keyboard"];

const productsCount = productNames.reduce((accumulator) => accumulator + 1, 0);
console.log(productsCount);