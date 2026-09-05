const originalUsers = [
    {name: "Rahul", role: "developer"},
    {name: "Priya", role: "student"}
];

const updatedUsers = originalUsers.map(user => ({...user, role: "developer"}));

// // Or
// const updatedUsers = originalUsers.map(function (user) {
//     return {...user, role: "developer"};
// });

console.log(updatedUsers);