// Method - 1 :-
// const body = document.querySelector("body");
// const originalButton = document.querySelector("#btn");

// let clonedButton = originalButton.cloneNode(true);
// clonedButton.textContent = "I am Cloned Button";
// clonedButton.removeAttribute('id');

// body.appendChild(clonedButton);


// ----------x----------x----------x----------x----------x----------


// Method - 2 :-
const body = document.querySelector("body");
const originalButton = document.querySelector("#btn");
const clonedButton = originalButton.cloneNode(true);

body.append(clonedButton);