const users = [
    {name: "Amit", age: 25 },
    {name: "Rahul", age: 20},
    {name: "Priya", age: 22},
    {name: "Rahul", age: 30}
];

const targetUser = users.find(user => user.name === "Rahul");

if (targetUser) {
    console.log(targetUser);
}
else {
    console.log("User not found!");
}