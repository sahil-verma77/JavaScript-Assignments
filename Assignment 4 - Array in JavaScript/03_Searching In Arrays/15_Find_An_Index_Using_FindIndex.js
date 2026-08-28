const users = [
    {name: "Amit", age: 25 },
    {name: "Rahul", age: 20},
    {name: "Priya", age: 22},
    {name: "Rahul", age: 30}
];

const index = users.findIndex(user => user.name === "Priya");
console.log(index);