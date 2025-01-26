"use strict";
// A funtion declaration that never completes and returns a never type
const throwError = (errorMsg) => {
    throw new Error(errorMsg);
};
// If we use the parent type for an annotation, like object to annotate an array, TS won't complain because object is the parent
let strings = ["a", "b"];
let myFunc = () => 2;
