const languages = ["HTML", "CSS", "JavaScript", "React", "Node.Js"];

const index = languages.indexOf("React");

if (index != -1) {
    const position = index + 1;
    console.log(position);
}
else {
    console.log("The language is not in the array.");
}