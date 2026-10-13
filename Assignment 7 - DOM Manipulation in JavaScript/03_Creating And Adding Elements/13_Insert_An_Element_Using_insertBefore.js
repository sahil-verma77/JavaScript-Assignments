// Method - 1 :- (With id)
// const skills3 = document.querySelector("#skills-3");
// const secondItem = document.querySelector("#second-item");

// let newItem = document.createElement("li");
// newItem.textContent = "CSS";

// skills3.insertBefore(newItem, secondItem);


// Method - 2 :- (Without id)
const skills3 = document.querySelector("#skills-3");
const secondItem = skills3.children[1];

const newItem = document.createElement("li");
newItem.textContent = "CSS";

skills3.insertBefore(newItem, secondItem);