const skills = document.querySelector("#skills");
const paragraph = document.querySelector("#paragraph");

skills.addEventListener("click", (e) => {
    if (e.target.id === "skills") {
        return;
    }
    paragraph.textContent = `You Clicked: ${e.target.textContent}`;
})