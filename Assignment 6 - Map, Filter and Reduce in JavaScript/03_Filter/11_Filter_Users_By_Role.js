const users = [
    {name: "Rahul", role: "developer"},
    {name: "Priya", role: "student"}
];

const devUser = users.filter((user) => user.role === "developer");
console.log(devUser);