"use strict";
const greet = (name = "Guest") => {
    return `Hello, ${name}`;
};
console.log(greet());
greet("John");
const calculateArea = (width, height = 10) => {
    return width * height;
};
calculateArea(5);
calculateArea(5, 20);
