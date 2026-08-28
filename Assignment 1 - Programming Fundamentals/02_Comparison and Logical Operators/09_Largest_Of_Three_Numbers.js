let num1 = 7;
let num2 = 7;
let num3 = 10;

console.log(`First number: ${num1}`);
console.log(`Second number: ${num2}`);
console.log(`Third number: ${num3}`);

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is greatest`);
}
else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is greatest`);
}
else {
    console.log(`${num3} is greatest`);
}