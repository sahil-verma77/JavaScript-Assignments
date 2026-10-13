// Method - 1 :-
// const targetElement = document.querySelector("#target-ele");

// targetElement.remove();

// // Or
// const skills = document.querySelector("#skills");
// const targetElement = document.querySelector("#target-ele");

// skills.removeChild(targetElement);


// ----------x----------x----------x----------x----------x----------


// Method - 2 :-
const skills = document.querySelector("#skills");
const targetElement = skills.children[1];

targetElement.remove();

// // Or
// const skills = document.querySelector("#skills");
// const targetElement = skills.children[1];

// skills.removeChild(targetElement);