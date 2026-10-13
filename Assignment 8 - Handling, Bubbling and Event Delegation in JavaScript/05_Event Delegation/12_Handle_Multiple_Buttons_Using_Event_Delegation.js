const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (e) => {
    // if (e.target.tagName === "BUTTON") {
    //     console.log(`${e.target.textContent} button is clicked`);
    // }

    // // Or
    if (e.target.id === "buttons") {
        return;
    }
    console.log(`${e.target.textContent} button is clicked`);
})