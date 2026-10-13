const form = document.querySelector("#form");
const input = document.querySelector("#input");
const displayTxt = document.querySelector("#display-text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValue = input.value;
    if (!nameValue) {
        displayTxt.textContent = "Name is required.";
        displayTxt.style.color = "red";
        return;
    }
    displayTxt.textContent = "Form submitted successfully!";
    displayTxt.style.color = "blue";
})