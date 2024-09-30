function addition() {
    let number = 10;
    let number2 = 20;
    let total = number + number2;
    console.log(total);
}
addition();

//with arguments
function multiply(number, number2) {
    let total = number * number2;
    console.log(total);
}
multiply(10, 5);
let number3 = 4;
let number4 = 5;
multiply(number3, number4);

//with return type
function power(number) {
    let total = number * number;
    return total;
}
let numberPower = power(10);
console.log(numberPower);


//function expressions
let fullName = function (firstName,lastName) {
    return firstName + lastName;
}
let myName = fullName("Yadvendra"," Singh");
console.log(myName);



//arrow function
let arrowFun = () => console.log("hello");
arrowFun();

// rest operator
function cart(...price) {
    return price; 
}
console.log(cart(100,200,300));

function cart2(p1 , p2, ...price) {
    return price; 
}
console.log(cart2(100,200,300,50000,8));

//objects
let obj = {name:"yadvendra",age:30};
function myDetails(data) {
    console.log(`My name is ${data.name} and age is ${data.age}`);
}
myDetails(obj);
myDetails({name:"lala",age:30});


//arrays
let array = ["apple","orange"]
function secondValue(data) {
    console.log(data[1]);
}
secondValue(array);
secondValue([100,200,300]);
