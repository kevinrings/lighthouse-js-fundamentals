/*
const sayHello  = function () {
  console.log("Hello, world");
}


sayHello();
*/

const sayHello  = function (name) {
  console.log("Hello, " + name);
}

// console.log
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

//return
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);
