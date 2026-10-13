const emailAddresses = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];

const filterGmail = emailAddresses.filter((emailAddress) => {
    return emailAddress.endsWith("@gmail.com");
    // return emailAddress.includes("@gmail.com");
});
console.log(filterGmail);