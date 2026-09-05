const originalPrices = [100, 200, 300];

const newPrices = originalPrices.map(value => Number((value * 1.1).toFixed(2)));

// // Or
// const newPrices = originalPrices.map(value => value + (value * 0.1));

console.log(newPrices);