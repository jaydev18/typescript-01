//type annotation

let awsomeName = "shakeandbake";

awsomeName = "something";

awsomeName = awsomeName.toUpperCase();
console.log(awsomeName);

// awsomeName = 20; i can't do this

let amount: number = 20;
amount = 12 - 1;
// amount = 'pants' i can't reassign a string

let isAwsome: boolean = true;

isAwsome = false;
console.log(isAwsome);

/**
- Create a variable of type string and try to invoke a string method on it.
- Create a variable of type number and try to perform a mathematical operation on it.
- Create a variable of type boolean and try to perform a logical operation on it.
- Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
 */

let a: string = "jaydev";

console.log(a.toUpperCase());

let b: number = 3;

console.log(b * b);
