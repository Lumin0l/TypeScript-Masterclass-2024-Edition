let city = "New York"; // string
let population = 8400000; // number
const age = 32; //! number -> it is literal 32 because it's a const and thus fixed.
let oldAge = 79 as const; //! const -> yes and no it's literal 79
let newAge = oldAge; // const number 79
let data = new Map(); // Map
let score = [90, 86, 100]; //! array<any> -> number[]
type Primitive = string | number | boolean; // string or number or boolean, since it's a union type
type CustomName = "John" extends string ? string : "John"; // string
type CustomAge = typeof newAge extends number ? 79 : number; // 79
type CheckData = typeof data extends Object ? true : false; // true
type CheckScore = typeof score extends never ? {} : []; // []

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// age = 85; -> yes !-> it is a const, can't be reassigned.
// score.push(10); -> yes
// score.push("New Score"); -> yes !-> error, because it is a number array. 
// let customAge: CustomAge = 50; -> yes !-> no, because it is a const literal of 79
// let primitive: Primitive = new Date(); -> yes !-> no, because it's cast as string 
// let years: CheckScore = []; -> yes