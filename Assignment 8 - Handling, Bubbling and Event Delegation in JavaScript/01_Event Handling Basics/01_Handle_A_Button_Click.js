const btn = document.querySelector("#btn");
const removebtn = document.querySelector("#remove-btn");
const btnTxt = document.querySelector("#btn-clicked");

btn.addEventListener('click', () => {
    // console.log("Button Clicked!");
    btnTxt.textContent = "Button Clicked!";
})

removebtn.addEventListener('click', () => {
    btnTxt.textContent = "";
})