const parent = document.querySelector("#parent");
const btn = document.querySelector("#child");

parent.addEventListener('click', (e) => {
    console.log("Parent Clicked!");
});

btn.addEventListener('click', (e) => {
    console.log("Button Clicked!");
});