const form2 = document.querySelector("#form-2");
const input2 = document.querySelector("#input-2");
const displayTxt2 = document.querySelector("#display-text-2");

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = input2.value;
    if (!email) {
        displayTxt2.textContent = "Email is required.";
        displayTxt2.style.color = "red";
        return;
    }
    displayTxt2.textContent = "Form submitted successfully!";
    displayTxt2.style.color = "blue";
})