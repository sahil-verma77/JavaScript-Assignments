// Using a Date String :-
const independenceDay = new Date("1947-08-15"); // YY-MM-DD

const formattedDate = independenceDay.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});
console.log(`Historic Event: ${formattedDate}`);


// // Using Component Numbers :-
// const republicDay = new Date(1950, 0, 26); // YYYY, MM, DD
// const formattedDate2 = republicDay.toDateString();
// console.log(formattedDate2);
