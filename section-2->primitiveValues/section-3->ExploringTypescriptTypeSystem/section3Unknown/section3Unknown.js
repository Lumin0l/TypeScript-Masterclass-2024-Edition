"use strict";
//  This is a type that states that the type we are going to use is unknown yet. Unlike with “any” the program will throw errors if trying to do something potentially “dangerous”:
function multiByTwo(number) {
    // @ts-ignore
    return number * 2; // This will throw an error because TS detects it could potentially lead to problems.
}
