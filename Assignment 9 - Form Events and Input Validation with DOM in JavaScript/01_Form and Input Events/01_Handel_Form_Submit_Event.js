const form = document.querySelector("#form");
const displayTxt = document.querySelector("#display-text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    displayTxt.textContent = "Form submitted successfully!";
})