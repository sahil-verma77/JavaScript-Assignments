const input5 = document.querySelector("#input-5");

input5.addEventListener("focus", (e) => {
    // input5.classList.remove("border", "border-black");
    // input5.classList.add("outline-none", "border-2", "border-red-600", "text-red-600", "bg-blue-300");
    input5.className = "outline-none border-2 border-red-600 text-red-600 bg-blue-300";
})
input5.addEventListener("blur", (e) => {
    // input5.classList.remove("outline-none", "border-2", "border-red-600", "text-red-600", "bg-blue-300");
    // input5.classList.add("border", "border-black");
    input5.className = "border border-black";
})