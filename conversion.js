let age = "30";
console.log(age);
console.log(typeof(age));

let myAge = Number(age);
console.log(myAge);
console.log(typeof(myAge));


let num = 123;
console.log(num);
console.log(typeof(num));
let number = String(num);
console.log(number);
console.log(typeof(number));

let logedIn = 1;
let logedIn2 = Boolean(logedIn)
console.log(logedIn2);
console.log(typeof(logedIn2));


//json stringify and parse

let data = {name : "Yadvendra",age : 30}; 
let myData = JSON.stringify(data);
console.log(myData);

let str = JSON.parse(myData);
console.log(str);

