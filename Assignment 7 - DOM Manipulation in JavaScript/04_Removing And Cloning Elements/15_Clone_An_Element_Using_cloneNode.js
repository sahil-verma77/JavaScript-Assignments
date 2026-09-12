const originalButton = document.querySelector("#btn");
const buttonContainer = document.querySelector("#button-container");

let clonedButton = originalButton.cloneNode(true);
clonedButton.textContent = "I am Cloned Button";
clonedButton.removeAttribute('id');

buttonContainer.appendChild(clonedButton);