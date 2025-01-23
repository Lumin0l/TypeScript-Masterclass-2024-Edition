// TS will infer the type of the variable to be Undefined if it is not assigned a value


let notDefined; // Type: Undefined, if we console.log it will print undefined

// We can also type the variable as undefined
let undefinedValue: undefined;

// If we type a var as null it can only be assigned null
let nullValue: null; // Type: null, if we console.log it will throw an error untill we assign null to it
let nullValue2 = null; // Type: null, if we console.log it will print null

/* 

Key Differences:
Type Inference:

If a variable is declared without an initial value, TypeScript infers its type as undefined.
If a variable is assigned null, TypeScript infers its type as null.
Usage:

undefined is typically used to indicate that a variable has not been initialized.
null is used to explicitly indicate that a variable should have no value.
Type Compatibility:

By default, null and undefined are subtypes of all other types. This means you can assign null and undefined to any other type.
However, with the --strictNullChecks flag enabled, null and undefined are only assignable to any, unknown, void, and their respective types.

*/

// Null can also be used in conditional statements
let nullValue3 = null;
if (nullValue3 === null) {
    console.log('nullValue3 is null');
}

// or

if (!nullValue3) {
    console.log('nullValue3 is null');
}
