"use strict";
/* Strings */
var car = "Opel"; // Anotated type -> string
var city = "New York"; // Inferred type -> string
const phone = "iPhone"; // Inferred const = this will consider phone as always "iPhone" and thus is kind  of of "type iPhone"
let students = 30;
let studentsAsString = students.toString(); // Even though "students" is a number, every expression that resolves to a type will be inferred as said type, in this case string
/* Numbers */
var age = 2;
const members = 50; // inferred number
members = 120; // Error, because members is a const and cant be reassigned.
let stringToNumber = parseInt("1999"); // Expression concludes in number, so type number
/* Booleans */
// Work the same
let minimumStudents = students >= 25 ? true : false; // This infers the let to be a boolean.
