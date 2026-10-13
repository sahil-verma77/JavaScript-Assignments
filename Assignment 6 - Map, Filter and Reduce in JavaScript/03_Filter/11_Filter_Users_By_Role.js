const users = [
    {name: "Rahul", role: "developer"},
    {name: "Priya", role: "student"}
];

const devUser = users.filter((user) => user.role === "developer");

// // Or
// const devUser = users.filter((user) => {
//     if (user.role === "developer") {
//         return user;
//     }
// });

console.log(devUser);