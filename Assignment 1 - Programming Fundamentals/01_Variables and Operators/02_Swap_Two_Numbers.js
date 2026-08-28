let a = 10;
let b = 20;
console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// Swapping
// Method 1
a = b+a-(b = a) // a = 20+10-(10) = 20

// Method 2
// let temp = a;
// a = b;
// b = temp;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);