// union type allow a variable to hold a value of multiple types

let tax: number | string = 10;

tax = 100;
tax = "$10";

console.log(tax);

let requestStatus: "pending" | "success" | "error" = "pending";

// requestStatus = 'jdjahdj' this will through me an error

requestStatus = "pending";
requestStatus = "success";

// -----------------------------------

//any type

let notSure: any;
notSure = 4;
notSure = "maybe a string";
notSure = false;
console.log(notSure);

//-----------------------------------

const books = ["1984", "Brave new world", "fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1983") {
    foundBook = book;
    foundBook.length;
    break;
  }
}

console.log(foundBook?.length);
//-------------------------
//array

let price: number[] = [100, 75, 42];
// price.push('hello') ; //can't do this

let fruit: string[] = ["apple", "orange"];

// let randomValues: [] = ['hello']

let array: (string | boolean)[] = ["jaydev", true, "hello world"];
