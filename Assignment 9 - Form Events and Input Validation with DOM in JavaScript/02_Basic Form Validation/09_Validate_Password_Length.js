const form3 = document.querySelector("#form-3");
const input3 = document.querySelector("#input-3");
const displayTxt3 = document.querySelector("#display-text-3");

form3.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = input3.value;
    if (!password) {
        displayTxt3.textContent = "Password is required.";
        displayTxt3.style.color = "red";
        return;
    }
    if (password.length < 6) {
        displayTxt3.textContent = "Password must be at least 6 characters.";
        displayTxt3.style.color = "red";
        return;
    }
    displayTxt3.textContent = "Form submitted successfully!";
    displayTxt3.style.color = "blue";
})