const productNames = ["Laptop", "Mouse", "Keyboard"];

const productsCount = productNames.reduce((acc, cur) => acc + 1, 0);
console.log(productsCount);