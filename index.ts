// Date;
// Array;
// Map;
// Set;
// Promise;
// RegExp;
// Error;
// Function;
// Symbol;
// WeakMap;
// WeakSet;

// As naming convention use Upper Camel Case or also called PascalCase
// Duck Typing is used by TypeScript for inference of types
//* "If it looks like a duck and quacks like a duck, it's a duck".
type CustomString = string;
type CustomNumberType = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

let firstName: CustomString = "Mark"; // TS will infer this as a string, because we declared it to that primitive before.
let age: CustomNumberType = 32;
let today: CustomDate = new Date(); // Object instantiation hence has a constructor and new keyword
let unique: CustomSymbol = Symbol(); // Primitive does not require new keyword

// If you do not assign a type to a variable TS will still try to infer it
// If I try to assign another type to firstName it will throw error
let lastName = "Doe";
// @ts-ignore
lastName = 25;

// This is an example of a declaration
function addNumber(a: number, b: number) {
  return a + b;
}

// TypeScript is able to infer that final result will be a number
let finalResult = addNumber(10, 15);