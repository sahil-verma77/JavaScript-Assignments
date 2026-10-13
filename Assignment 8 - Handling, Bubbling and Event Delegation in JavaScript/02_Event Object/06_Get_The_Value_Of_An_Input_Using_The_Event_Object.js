const input = document.querySelector("#input");
const displayText = document.querySelector("#display-text");

input.addEventListener('input', (e) => {
    let inputText = e.target.value;
    
    // console.log(`You typed: ${inputText}`);
    displayText.textContent = `You typed: ${inputText}`;
})