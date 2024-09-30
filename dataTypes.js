//Primitive

let name = "Yadvendra";//string
console.log(typeof(name));

let age = 30;//number
console.log(typeof(age));

let major = true;//boolean
console.log(typeof(major));

let children = null//null
console.log(typeof(children));

let wife = undefined;//undefined
console.log(typeof(wife));

let sym = Symbol();//symbol
console.log(typeof(sym));

let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
console.log(sym2 === sym3);
let bigData = 333333n//big int
console.log(typeof(bigData));

//Non primitive

let array = ["Yadvendra",30];//object
console.log(typeof(array));

let obj = { name : "Yadvendra", age : 30};
console.log(typeof(array));

let myFun = function () {};
console.log(typeof(myFun));




