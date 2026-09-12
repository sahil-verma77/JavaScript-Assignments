const list3 = document.querySelector("#skills-3");
const secondItem = document.querySelector("#second-item");

let newItem = document.createElement("li");
newItem.textContent = "CSS";

list3.insertBefore(newItem, secondItem);