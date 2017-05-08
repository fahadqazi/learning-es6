//Symbol data type

var symbol1 = Symbol('hello');
var symbol2 = Symbol('hello');

symbol1 === symbol2  //false

console.log(typeof symbol1)  //Symbol

console.log('symbol: ', symbol1)  //TypeError

console.log('symbol: ', symbol1.toString());  //symbol: Symbol(symbol1)

//Use case 1
//used as a property key, as it doesn't clash

const MY_KEY = Symbol();
let obj = {};

obj[MY_KEY] = 123;
console.log(obj[MY_KEy]); // 123



