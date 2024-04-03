// // var isRevExited = learningPlatform.indexOf("Rev"); // 0, it is exist
// // var isRevExited = learningPlatform.indexOf("Jev"); // -1, it is not exist
// // var isRevExited = learningPlatform.match("ev"); // ['ev, index: 1, input: 'RevoU', groups]
// // var isRevExited = learningPlatform.includes("Rev"); //true
// // var isRevExited = learningPlatform.includes("jev"); //false

// // const { isExist } = require("./module.js");

// // var shoppingCart = ["phone", "laptop", "steam deck", "ps5"];
// // var toString = shoppingCart.toString(); // phone,laptop,steam deck, ps5
// // var pop = shoppingCart.pop(); // ps5,['phone','laptop','steam deck']
// // var push = shoppingCart.push("webcam"); //['phone','laptop','steam deck','ps5','webcam']
// // var shift = shoppingCart.shift(); // phone, ['laptop','steam deck','ps5']
// // var unshift = shoppingCart.unshift("pc"); // 5, ['pc','phone','laptop','steam deck','ps5']
// // var splice = shoppingCart.splice(2, 0, "VR"); //[], ['phone','laptop','VR','steam deck','ps5']

// let shoppingItem = ["pc", "iphone"];
// function addShoppingItem(item) {
//   shoppingItem.push(item);
// }
// function removeLastItem() {
//   shoppingItem.pop();
//   return shoppingItem;
// }
// addShoppingItem("laptop");
// console.log(removeLastItem());

// function generateReceipt(paymentMethod, paymentNumber) {
//   var invoice = "inv";
//   var receiptNumber = invoice.concat(
//     "/",
//     paymentMethod,
//     "/",
//     paymentNumber,
//     "/21-07-99"
//   );
//   return receiptNumber.toUpperCase();
// }
// console.log(generateReceipt("BNI", 123456));

// function Receipt(paymentMethod, paymentNumber, date) {
//   var initiaString = "inv/";
//   return initiaString
//     .concat(`${paymentMethod}/${paymentNumber}/${date}`)
//     .toUpperCase();
// }
// console.log(Receipt("BNI", 123456));

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// let factn = factorial(5); //120
// console.log(factn);

// //var { isExist } = require("./module.js");
// //console.log(isExist);

// var varVariabelVar = 10;
// varVariabelVar = 5;
// console.log(varVariabelVar);
// let variabelLet = "ini bisa diubah";
// variabelLet = "berubah";
// console.log(variabelLet);
// const variabelConst = "tidak bisa diubah";
// console.log(variabelConst);

// //const square = (x) => x * x;
// //let result = square(4);

// function square1(number) {
//   return number * number;
// }
// const hasil = square1(5);
// console.log(hasil);

// const square = (number) => {
//   return number * number;
// };
// const result = square(5);
// console.log(result);

// const functionExpresion = function (x) {
//   // annymouse function
//   return x * x;
// };
// let expresion = functionExpresion(3);
// console.log(expresion);

// function helloWorld() {
//   return "Hello World";
// }
// var helloWorldFunction = helloWorld;
// console.log(helloWorldFunction());

// let greet = function (name) {
//   console.log("Hello," + name + "!");
// };
// greet("Alice");

// function operate(a, b, operation) {
//   return operation(a, b);
// }
// function add(x, y) {
//   return x + y;
// }
// let hasilOperate = operate(3, 4, add);
// console.log(hasilOperate);

// function adder(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }
// const sum = adder(3)(10)();
// console.log(sum);
// // const adderLogX = adder(3); // x
// // const adderLogY = adderLogX(10); // y
// // const adderLogZ = adderlogY(5); //z
// // console.log(adderLogZ);

// // const sum = adder(5)(10);
// // console.log(sum(3));
// // console.log(sum(8));

// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }
// const multiplyByTwo = multiplier(2);
// console.log(multiplyByTwo(5));
// console.log(multiplyByTwo(8));

// function arrayManipulator(callback) {
//   const array = [1, 2, 3, 4, 5];
//   return callback(array);
// }
// const result1 = arrayManipulator(function (arr) {
//   return arr.map(function (num) {
//     return num * 2;
//   });
// });
// console.log(result1);
// const result2 = arrayManipulator(function (arr) {
//   return arr.filter(function (num) {
//     return num % 2 === 0;
//   });
// });
// console.log(result2);

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// const closureFunc = outer();
// closureFunc();
// closureFunc();

// function createCounter() {
//   var count = 0;
//   return function () {
//     return ++count;
//   };
// }
// var counter = createCounter();
// console.log(counter());
// console.log(counter());

// function outerA() {
//   var outerVar = "I am outside!";
//   function inner() {
//     var innerVar = "i am inside";
//     console.log(outerVar);
//     console.log(innerVar);
//   }
//   return inner;
// }
// var funClosure = outerA();
// funClosure();

// (function () {
//   console.log("i am IIFE");
// })();

// var resultTime = [];
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     resultTime.push(i);
//   }, 0);
// }
// console.log(resultTime);

// var resultIIFE;
// (function () {
//   resultIIFE = ["ini iife"];
//   for (var y = 0; y < 5; y++) {
//     setTimeout(function () {
//       resultIIFE.push(y);
//     }, 0);
//   }
// })();
// console.log(resultIIFE);

// // const module = (function () {
// //   let privateVar = 0;
// //   function privateFunction() {
// //     console.log("private function");
// //   }
// //   return {
// //     publicVar: 10,
// //     publicFunction: function () {
// //       console.log("public function");
// //     },
// //   };
// // })();
// // console.log(module.publicVar);
// // module.publicFunction();

// function tambah(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log(tambah(1, 2, 3));

// function jumlah(...numbers) {
//   console.log(numbers);
// }
// jumlah(1, 2, 3);

// function* generateSquence() {
//   console.log("Menuju1");
//   yield 1;
//   console.log("menuju 2");
//   yield 2;
//   yield 3;
// }
// const generator = generateSquence();
// generator.next(); // menuju 1
// console.log(generator.next().value); // menuju 2 2
// console.log(generator.next().value); // 3
// console.log(generator.next().value); // undefined
// console.log(generator.next()); // akan menghasilkan fungsi
// console.log(generator.next().done); // fungsinya selesai atau tidak jika iya maka true

// const angka = [1, 2, 3, 4, 5, 6];
// const apakah = (num) => num % 2 === 0;
// const squareb = (num) => num * num;
// const maka = filterAnTransform(angka, apakah, squareb);
// console.log(maka);
// function filterAnTransform(arr, filterCallback, transformCallback) {
//   return arr.filter(filterCallback).map(transformCallback);
// }

// // const addTwo = (x) => x + 2;
// // const multiplyByThree = (x) => x * 3;
// // const composedFunction = compose(addTwo, multiplyByThree);
// // const resultComposed = composedFunction(5);
// // console.log(resultComposed);
// // function compose(func1, func2) {
// //   return function (x) {
// //     return func1(func2(x));
// //   };
// // }

// // const compose = (function1, function2) => {
// //   return function (x) {
// //     return function1(function2(number));
// //     const addeByTwo = function2(x);
// //     const multiplyByThree = function1(addeByTwo);
// //     return multiplyByThree;
// //   };
// // };
// // const addTwo = (x) => x + 2;
// // const multiplyByThree = (x) => x * 3;
// // const composedFunction = compose(multiplyByThree, addTwo);
// // const ha = composedFunction(5);
// // console.log(composedFunction); // [Function (anonymous)]

// // const numberx = [1, 2, 3, 4, 5];
// // const sumOfSquaresx = calculateSumOfSquares(numberx);
// // console.log(sumOfSquaresx);

// // const calculateSumOfSquares = function (arra) {
// //   return arra.reduce(function (sum, num) {
// //     return sum + num * 2;
// //   }, 0);
// // };

// function fetchdata(callback) {
//   setTimeout(function () {
//     console.log("Data Fetched!");
//     callback();
//   }, 1000);
//   function processData() {
//     console.log("Data Processed!");
//   }
//   fetchdata(processData);
// }

// console.log(new Date());
// const data = fetch("https://module3-api-is2m.onrender.com/random-todos")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     console.log(new Date());
//     return data;
//   })
//   .catch((error) => {
//     console.log(eror);
//   });

// function fetchUser() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((dataUser) => console.log(dataUser));
// }
// console.log(fetchUser());

// function delay(milisecond) {
//   console.log("mencoba request data users ke server");
//   setTimeout(() => {
//     console.log("request berhasil");
//   }, milisecond);
// }
// delay(1000);

// function calculate(c, d, cback) {
//   setTimeout(function () {
//     const res = c + d;
//     cback(res);
//   }, 1000);
// }
// function displayRes(res) {
//   console.log("result is:" + res);
// }
// calculate(5, 7, displayRes);

// function fetchDataC(successCallback, errorCallback) {
//   const success = Math.random() < 0.5; //simulating success or failure
//   setTimeout(function () {
//     if (success) {
//       console.log("Data fetched Successfuly");
//       successCallback();
//     } else {
//       console.error("error fetching data!");
//       errorCallback();
//     }
//   }, 2000);
// }
// function onSuccess() {
//   console.log("Data Processed");
// }
// function onError() {
//   console.log("retry or handle the eror");
// }
// fetchDataC(onSuccess, onError);

// function fetchUsers() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve({
//         name: "john Doe",
//       });
//     }, 1000);
//   });
// }
// fetchUsers().then(function (users) {
//   console.log("users fetched: " + users.name);
// });

// async function fetchedUsera() {
//   const funcdataf = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   ).then((response) => response.json());
//   return funcdataf;
// }
// async function start() {
//   const datafetch = await fetchedUsera();
//   console.log(datafetch);
// }
// start();
// console.log(fetchedUsera);

// // async function fetchDataUser() {
// //   const datanya = fetch("https://jsonplaceholder.typicode.com/users")
// //     .then((response) => response.json())
// //     .catch((eror) => console.log(error));
// //   return datanya;
// // }
// // async function start() {
// //   const data = await fetchDataUser();
// //   console.log(data);
// // }
// // start();

// function asynchronousFunction() {
//   console.log("Start synchronous function");
//   // simulation a delay of 1 second
//   setTimeout(() => {
//     console.log("Async operation");
//   }, 1000);
//   console.log("End asyncronous function");
// }
// asynchronousFunction();

// function asynchronousFunction(callbackFunction) {
//   console.log("Start synchronous function");
//   setTimeout(callbackFunction, 1000);
//   console.log("End asyncronous function");
// }
// function printToTerminal() {
//   console.log("Async operation");
// }
// asynchronousFunction(printToTerminal);

function promiseExemple(number) {
  return new Promise((resolve, reject) => {
    if (number > 5) {
      resolve("Number is greater than 5");
    } else {
      reject("Number is Lower than 5!");
    }
  });
}
promiseExemple(2)
  .then((data) => {
    console.log(data);
  })
  .catch((eror) => {
    console.log("An Eror Has Occured");
    console.log(eror);
  });
