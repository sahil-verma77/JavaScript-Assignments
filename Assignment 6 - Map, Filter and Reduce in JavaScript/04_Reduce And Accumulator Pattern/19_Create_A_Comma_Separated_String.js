const frontendTech = ["HTML", "CSS", "JavaScript"];

// Method - 1
// const techString = frontendTech.join(", ");

// Method - 2
const techString = frontendTech.reduce((acc, cur) => {
    return acc + ", " + cur;
})

// Method - 3
// const techString = frontendTech.reduce((acc, tech) => `${acc}, ${tech}`);

console.log(techString);