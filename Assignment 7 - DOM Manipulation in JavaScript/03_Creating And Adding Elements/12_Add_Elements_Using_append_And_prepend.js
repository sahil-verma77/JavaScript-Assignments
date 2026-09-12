const list = document.querySelector("#skills-1");

let firstSkill = document.createElement('li');
firstSkill.textContent = "HTML";

let lastSkill = document.createElement('li');
lastSkill.textContent = "React";

list.prepend(firstSkill);
list.append(lastSkill);

// // Or 

const list2 = document.querySelector("#skills-2");

list2.prepend("HTML, ");
list2.append(", React");