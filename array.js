/* let array2 = new Array("apple","mango");
let array = [1,2,3,4];
console.log(array);

array.push(5);
console.log(array);
array.pop();
console.log(array);

array.unshift(50);
console.log(array);
array.shift();
console.log(array);

console.log(array.includes(3));
console.log(array.indexOf(3));

let str = array.join();
console.log(str);
console.log(str.split(","));
 */

/* let array = [1,2,3,4,5,6];
console.log(array);
console.log(array.slice(1,3));
console.log(array); */

/* let array = [1,2,3,4,5,6];
console.log(array);
console.log(array.splice(1,3));
console.log(array); */

let fruits = ["apple","mango","orange"];
let colors = ["red","blue","pink"]; 
/* fruits.push(colors)
console.log(fruits); */

let both = fruits.concat(colors);
console.log(both);

let newArray = [...fruits, ...colors];
console.log(newArray);

let anotherArray = [1,2,3,[4,5],6,7,[8,9,[10,11]]];
console.log(anotherArray.flat(Infinity));

let name = "yadvendra";
console.log(Array.isArray(name));


console.log(Array.from("yadvendra"));
console.log(Array.from({age:30}));

let score1 = 100;
let score2 = 200; 
let score3 = 300; 
console.log(Array.of(score1,score2,score3));



