var a = 100;
let b = 200;
const c = 300;

{
    var a = 1000;
    let b = 2000;
    const c = 3000;
}

/* console.log(a);
console.log(b);
console.log(c); */


function one(params) {
    let name = "yadvendra";
    function two(params) {
        let age = 30;
        console.log(age);
        console.log(name);
    }
    two();
    // console.log(age);

}
one();