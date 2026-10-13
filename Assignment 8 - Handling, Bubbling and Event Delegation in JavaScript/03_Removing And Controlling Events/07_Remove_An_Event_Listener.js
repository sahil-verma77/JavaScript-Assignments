const button = document.querySelector("#btn");
const message = document.querySelector("#message");

let clickCount = 0;
function handleButtonClick() {
    clickCount++;
    message.textContent = `Button Clicked! (Total Clicks: ${clickCount})`;
    if (clickCount === 3) {
        button.removeEventListener('click', handleButtonClick);
        button.textContent = "Button Disabled";
        message.textContent = "Clicking the button should no longer display the message."
    }
}
button.addEventListener('click', handleButtonClick);
