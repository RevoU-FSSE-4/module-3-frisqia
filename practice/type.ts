let employee: {
  name: string;
  age: number;
} = {
  name: "cia",
  age: 24,
};

//menggabungkan 2 type data bisa menggunakan pite |
let names: (string | number)[] = ["john", "clara", 123];
console.log(names);

// let skill: [string, number];
// skill = [12, "Learn"];

let apiResult: any;
apiResult = "Nama : cia";
apiResult = 24;
apiResult = true;
apiResult = {};
apiResult = [];

function greet(name: string): string {
  return "Hello, ${name}!";
}
// const result = (greet = "john");
// console.log(result);

// let age: number = 25;
// let Nama: string = "cia";

// interface TransactionInternal{
//   accountId:number;
// }
// interface transactionExternal {
//   codeBank: string
//   accountNumber: string
//   accountName: string
// }
// type transaction = TransactionInternal | transactionExternal
// function transfer<type>(transaction:type) type {
//   try {
//     console.log('doing transfer');
//   } catch (error) {
//     console.log("transfer agal");
//   } finally {
//     return transaction;
//   }

//   const transaction : transaction = { accountId : 12345}
// }
