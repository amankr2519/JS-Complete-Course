console.log("We are learning date time right now...");

let currentDate = new Date();

console.log("Year - ",currentDate.getFullYear());
console.log("Month - ",currentDate.getMonth()+1);
console.log("Date - ",currentDate.getDate());
console.log("Day - ",currentDate.getDay());
console.log(currentDate.toLocaleDateString());