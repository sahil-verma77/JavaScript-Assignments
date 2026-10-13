const parent = document.querySelector("#parent");
const button3 = document.querySelector("#btn-3");

parent.addEventListener('click', (e) => {
    e.stopPropagation(); // This stops the Event Bubbling
    console.log("Parent Clicked!");
})
button3.addEventListener('click', (e) => {
    e.stopPropagation(); // This stops the Event Bubbling
    console.log("Button Clicked!");
})