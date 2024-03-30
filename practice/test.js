// var isRevExited = learningPlatform.indexOf("Rev"); // 0, it is exist
// var isRevExited = learningPlatform.indexOf("Jev"); // -1, it is not exist
// var isRevExited = learningPlatform.match("ev"); // ['ev, index: 1, input: 'RevoU', groups]
// var isRevExited = learningPlatform.includes("Rev"); //true
// var isRevExited = learningPlatform.includes("jev"); //false

// const { isExist } = require("./module.js");

// var shoppingCart = ["phone", "laptop", "steam deck", "ps5"];
// var toString = shoppingCart.toString(); // phone,laptop,steam deck, ps5
// var pop = shoppingCart.pop(); // ps5,['phone','laptop','steam deck']
// var push = shoppingCart.push("webcam"); //['phone','laptop','steam deck','ps5','webcam']
// var shift = shoppingCart.shift(); // phone, ['laptop','steam deck','ps5']
// var unshift = shoppingCart.unshift("pc"); // 5, ['pc','phone','laptop','steam deck','ps5']
// var splice = shoppingCart.splice(2, 0, "VR"); //[], ['phone','laptop','VR','steam deck','ps5']

let shoppingItem = ["pc", "iphone"];
function addShoppingItem(item) {
  shoppingItem.push(item);
}
function removeLastItem() {
  shoppingItem.pop();
  return shoppingItem;
}
addShoppingItem("laptop");
console.log(removeLastItem());

function generateReceipt(paymentMethod, paymentNumber) {
  var invoice = "inv";
  var receiptNumber = invoice.concat(
    "/",
    paymentMethod,
    "/",
    paymentNumber,
    "/21-07-99"
  );
  return receiptNumber.toUpperCase();
}
console.log(generateReceipt("BNI", 123456));

function Receipt(paymentMethod, paymentNumber, date) {
  var initiaString = "inv/";
  return initiaString
    .concat(`${paymentMethod}/${paymentNumber}/${date}`)
    .toUpperCase();
}
console.log(Receipt("BNI", 123456));

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
let factn = factorial(5); //120
console.log(factn);

//var { isExist } = require("./module.js");
//console.log(isExist);

var varVariabelVar = 10;
varVariabelVar = 5;
console.log(varVariabelVar);
let variabelLet = "ini bisa diubah";
variabelLet = "berubah";
console.log(variabelLet);
const variabelConst = "tidak bisa diubah";
console.log(variabelConst);

//const square = (x) => x * x;
//let result = square(4);

function square1(number) {
  return number * number;
}
const hasil = square1(5);
console.log(hasil);

const square = (number) => {
  return number * number;
};
const result = square(5);
console.log(result);

const functionExpresion = function (x) {
  // annymouse function
  return x * x;
};
let expresion = functionExpresion(3);
console.log(expresion);

function helloWorld() {
  return "Hello World";
}
var helloWorldFunction = helloWorld;
console.log(helloWorldFunction());

let greet = function (name) {
  console.log("Hello," + name + "!");
};
greet("Alice");

function operate(a, b, operation) {
  return operation(a, b);
}
function add(x, y) {
  return x + y;
}
let hasilOperate = operate(3, 4, add);
console.log(hasilOperate);

function adder(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
const sum = adder(3)(10)();
console.log(sum);
// const adderLogX = adder(3); // x
// const adderLogY = adderLogX(10); // y
// const adderLogZ = adderlogY(5); //z
// console.log(adderLogZ);

// const sum = adder(5)(10);
// console.log(sum(3));
// console.log(sum(8));

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const multiplyByTwo = multiplier(2);
console.log(multiplyByTwo(5));
console.log(multiplyByTwo(8));

function arrayManipulator(callback) {
  const array = [1, 2, 3, 4, 5];
  return callback(array);
}
const result1 = arrayManipulator(function (arr) {
  return arr.map(function (num) {
    return num * 2;
  });
});
console.log(result1);
const result2 = arrayManipulator(function (arr) {
  return arr.filter(function (num) {
    return num % 2 === 0;
  });
});
console.log(result2);

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const closureFunc = outer();
closureFunc();
closureFunc();
