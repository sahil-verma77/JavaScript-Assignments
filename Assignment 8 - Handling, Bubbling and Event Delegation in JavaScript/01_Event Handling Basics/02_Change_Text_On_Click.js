const btn2 = document.querySelector("#btn-2");
const para = document.querySelector("#para");

btn2.addEventListener('click', () => {
    if (para.textContent === "Welcome to my website!") {
        para.textContent = "Thanks for visiting!";
        return;
    }
    para.textContent = "Welcome to my website!";
})