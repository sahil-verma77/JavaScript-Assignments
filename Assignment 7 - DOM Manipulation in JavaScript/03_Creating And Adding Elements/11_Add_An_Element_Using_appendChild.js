// Method - 1 :-
// const ul = document.querySelector("#skills"); 

// let li1 = document.createElement('li');
// let li2 = document.createElement('li');
// let li3 = document.createElement('li');

// li1.textContent = "HTML";
// li2.textContent = "CSS";
// li3.textContent = "JavaScript";

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);


// Method - 2 :-
const ul = document.querySelector("#skills");
const skillsArray = ["HTML", "CSS", "JavaScript"];

skillsArray.forEach(skill => {
    let li = document.createElement('li');
    li.textContent = skill;
    ul.appendChild(li);
});