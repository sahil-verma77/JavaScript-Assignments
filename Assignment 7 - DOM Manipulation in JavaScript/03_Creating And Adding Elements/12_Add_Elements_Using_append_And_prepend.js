const skills = document.querySelector("#skills-1");

let firstSkill = document.createElement('li');
let lastSkill = document.createElement('li');

firstSkill.textContent = "HTML";
lastSkill.textContent = "React";

skills.prepend(firstSkill);
skills.append(lastSkill);

// // Or 

const skills2 = document.querySelector("#skills-2");

skills2.prepend("HTML, ");
skills2.append(", React");