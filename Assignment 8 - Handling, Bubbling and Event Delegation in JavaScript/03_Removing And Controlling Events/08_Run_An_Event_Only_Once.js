const button2 = document.querySelector("#btn-2");
const message2 = document.querySelector("#message-2");

button2.addEventListener('click', () => {
    message2.textContent = "Welcome!";
}, {once : true});