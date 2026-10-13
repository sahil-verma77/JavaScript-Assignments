const h2 = document.querySelector("#h2");

h2.addEventListener('mouseover', () => {
    h2.textContent = "Mouse is over the heading";
    h2.style.backgroundColor = "yellow";

})
h2.addEventListener('mouseleave', () => {
    h2.textContent = "JavaScript";
    h2.style.backgroundColor = "white";
})
