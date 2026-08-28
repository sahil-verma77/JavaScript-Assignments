const input = require('prompt-sync')();

let studentName = "Sahil Verma";
let rollNumber = 21;
let mathMarks = 73;
let scienceMarks = 76;
let englishMarks = 88;

console.log(`--------------------------
      STUDENT RESULT
--------------------------`);
console.log(`Name       : ${studentName}
Roll No    : ${rollNumber}

Math       : ${mathMarks}
Science    : ${scienceMarks}
English    : ${englishMarks}

Total      : ${mathMarks+scienceMarks+englishMarks}
Percentage : ${((mathMarks+scienceMarks+englishMarks)/3).toFixed(2)} %
Grade      : ${(mathMarks+scienceMarks+englishMarks)/3 >= 90 ? "A" : (mathMarks+scienceMarks+englishMarks)/3 >= 80 ? "B" : (mathMarks+scienceMarks+englishMarks)/3 >= 70 ? "C" : (mathMarks+scienceMarks+englishMarks)/3 >= 60 ? "D" : (mathMarks+scienceMarks+englishMarks)/3 >= 40 ? "E" : "F"}
Result     : ${mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40 ? "PASS" : "FAIL"}`);