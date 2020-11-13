// let num = 10;

// function showFirstMessage(text){
//     alert(text);
//      num = 20;
// }

// showFirstMessage("hellowirlld");

// console.log(num);


let calc = (a,b) => a+b;
console.log(calc(3,5));




function retVar(){
    let num = 50;
    return num;
}
let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());


let twelve ="12.2px";
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

function createCounter() {
 let counter = 0;
const myFunction = function() {
counter = counter + 1;
return counter;
}
return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
 const c3 = increment();
 console.log('example increment', c1, c2, c3);