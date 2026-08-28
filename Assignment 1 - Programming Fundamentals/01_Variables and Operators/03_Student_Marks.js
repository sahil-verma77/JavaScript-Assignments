let physics = 74;
let chemistry = 91;
let maths = 76;

let total_marks = physics + chemistry + maths;
let average_marks = (total_marks/3).toFixed(2);
let percentage = ((total_marks/300)*100).toFixed(2)

console.log(`Total Marks: ${total_marks}`);
console.log(`Average Marks: ${average_marks}`);
console.log(`Percentage: ${percentage}%`);
