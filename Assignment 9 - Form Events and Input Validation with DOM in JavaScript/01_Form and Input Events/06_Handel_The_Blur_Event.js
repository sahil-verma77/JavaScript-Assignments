const input6 = document.querySelector("#input-6");
const displayTxt6 = document.querySelector("#display-text-6");

input6.addEventListener("focus", (e) => {
    displayTxt6.textContent = "";
})

input6.addEventListener("blur", (e) => {
    displayTxt6.textContent = "You left the input field.";
})