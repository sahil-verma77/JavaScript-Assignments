const button = document.querySelector("#btn");

button.addEventListener('click', (e) => {
    const clickedTagName = e.target.tagName;
    console.log(clickedTagName);
})