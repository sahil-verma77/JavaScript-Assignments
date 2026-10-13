// Method - 1 :-
// const input3 = document.querySelector("#input-3");
// const displayTxt3 = document.querySelector("#display-text-3");

// input3.addEventListener("input", (e) => {
//     displayTxt3.textContent = `You entered: ${e.target.value}`;
// })


// ----------x----------x----------x----------x----------x----------


// Method - 2 :-
const form3 = document.querySelector("#form-3");
const input3 = document.querySelector("#input-3");
const displayTxt3 = document.querySelector("#display-text-3");

form3.addEventListener("input", (e) => {
    displayTxt3.textContent = `You entered: ${input3.value}`;
})