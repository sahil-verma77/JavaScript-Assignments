const productPrices = [500, 1200, 300];

const totalPrice = productPrices.reduce((accumulator, currentItem) => accumulator+currentItem , 0);
console.log(totalPrice);