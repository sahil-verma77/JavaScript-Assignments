const user = {
    name: "Rahul",
    role: "student"
};

const updatedUser = {...user, role: "developer"};
console.log("Original user:", user);
console.log("Updated user:", updatedUser);