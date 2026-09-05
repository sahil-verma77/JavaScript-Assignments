const frontendTech = ["HTML", "CSS", "JavaScript"];

const joinedString = frontendTech.reduce((acc, tech) => `${acc}, ${tech}`);
// // Or
// const joinedString = frontendTech.reduce((accumulator, currentTech, index) => {
//     if (index === 0) return currentTech;
//     return accumulator + ", " + currentTech;
// })

const finalString = `"${joinedString}"`;
console.log(finalString);