const coordinates = document.querySelector("#coordinates");

coordinates.addEventListener('mousemove', (e) => {
    // console.log(`X: ${e.x}`);
    // console.log(`Y: ${e.y}`);
    coordinates.textContent = `
    Coordinates:- 
    X: ${e.clientX}
    Y: ${e.clientY}
    `
})