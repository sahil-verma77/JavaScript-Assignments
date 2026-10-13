const form4 = document.querySelector("#form-4");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const displayTxt4 = document.querySelector("#display-text-4");

form4.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = inputName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;
    if (!name) {
        displayTxt4.textContent = "Name is required.";
        displayTxt4.style.color = "red";
        return;
    }
    if (!email) {
        displayTxt4.textContent = "Email is required.";
        displayTxt4.style.color = "red";
        return;
    }
    if (!password) {
        displayTxt4.textContent = "Password is required.";
        displayTxt4.style.color = "red";
        return;
    }
    if (password.length < 6) {
        displayTxt4.textContent = "Password must be at least 6 characters.";
        displayTxt4.style.color = "red";
        return;
    }
    displayTxt4.textContent = "Form submitted successfully!";
    displayTxt4.style.color = "blue";
})