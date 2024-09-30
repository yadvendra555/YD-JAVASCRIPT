let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(typeof date);
console.log(typeof date);

let newDate = new Date(2024,0,5);
console.log(newDate.toDateString());


let newDate2 = new Date(2024,0,5,5);
console.log(newDate2.toDateString());

let newDate3 = new Date("01-15-2024");
console.log(newDate3.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(Math.floor(timeStamp/1000));









