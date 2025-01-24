/* 
var car: string = "Opel"; // Anotated type -> string
var city = "New York"; // Inferred type -> string

const phone = "iPhone"; // Inferred const = this will consider phone as always "iPhone" and thus is kind  of of "type iPhone"

let students = 30;
let studentsAsString = students.toString(); // Even though "students" is a number, every expression that resolves to a type will be inferred as said type, in this case string

var age: number = 2;

const members = 50; // inferred number

members = 120; // Error, because members is a const and cant be reassigned.


// @ts-ignore
let stringToNumber = parseInt("1999"); // Expression concludes in number, so type number

// Booleans Work the same

let minimumStudents = students >= 25 ? true : false; // This infers the let to be a boolean.
*/

// BigInt

// BigInt is a new primitive introduced in ES2020 that allows you to work with big integers.
// Before the introduction of BigInt, JavaScript could only safely represent numbers between -(2^53 - 1) and 2^53 - 1.
const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt) // 9007199254740991

// Declaring bigInt can be done 2 ways:
let bigInt1 = BigInt(12325465); // Inferred
let bigInt2 : bigint = 1234235n; // For typed format, the n is needed

// Symbol
let id: symbol = Symbol(1234);
let alphabeticId: symbol = Symbol("id");

let user = {
  [id]: "12344",
  [alphabeticId]: "uniqueId",
  name: "Mark",
  getId() {
    return this[id];
  },
};

// Symbols are  private
console.log(user.name);
// will throw a typescript error with id not accessible
// Throws error because the key here is not 'id' but a symbol generated with 1234 who's value is unknown but guaranteed to be unique
//! console.log(user.id);

// The id property does exist add the getId method to the object
console.log(user.getId());