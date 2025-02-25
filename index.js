"use strict";
/* My solution */
// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
let numbers = [];
let strings = [];
//* 2. Create a tuple person that holds a string (name) and a number (age).
const namee = "Imanol";
const age = 29;
let person = [namee, age];
//* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.
let colors = ["white", "red"];
let point = [1, 2];
// colors.push("blue")
//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["Active"] = "active";
    StatusEnum["Inactive"] = "inactive";
    StatusEnum["Pending"] = "pending";
})(StatusEnum || (StatusEnum = {}));
//* 5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
    Active: "active",
    Inactive: "inactive",
    Pending: "pending"
};
