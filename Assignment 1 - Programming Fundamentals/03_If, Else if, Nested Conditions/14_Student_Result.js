let physics = 74;
let chemistry = 92;
let maths = 76;

let totalMarks = physics + chemistry + maths;
let average = totalMarks / 3;

if (physics < 40 || chemistry < 40 || maths < 40) {
    console.log("Result: Fail");
}
else if (average >= 75) {
    console.log(`Distinction: ${average.toFixed(2)}`);
}
else if (average >= 60) {
    console.log(`First Division: ${average.toFixed(2)}`);
}
else if (average >= 50) {
    console.log(`Second Division: ${average.toFixed(2)}`);
}
else {
    console.log(`Pass: ${average.toFixed(2)}`);
}