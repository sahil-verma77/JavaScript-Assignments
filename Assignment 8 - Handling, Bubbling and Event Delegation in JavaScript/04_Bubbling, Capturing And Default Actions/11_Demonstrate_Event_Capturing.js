const parent2 = document.querySelector("#parent-2");
const btn2 = document.querySelector("#child-2");

parent2.addEventListener("click", (e) => {
    console.log("Parent Clicked!");
}, true)

btn2.addEventListener("click", (e) => {
    console.log("Button Clicked!");
}, true)