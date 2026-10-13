const form4 = document.querySelector("#form-4");
const displayTxt4 = document.querySelector("#display-text-4");

form4.addEventListener("change", (e) => {
    displayTxt4.textContent = `You selected: ${e.target.value}`;
})