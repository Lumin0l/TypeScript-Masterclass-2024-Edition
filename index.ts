let city = "New York"; // string
let population = 8400000; // number
const age = 32; // number
let oldAge = 79 as const; // const
let newAge = oldAge; // const number 79
let data = new Map(); // Map
let score = [90, 86, 100]; // array<any>
type Primitive = string | number | boolean; // string or number or boolean, since it's a union type
type CustomName = "John" extends string ? string : "John"; // string
type CustomAge = typeof newAge extends number ? 79 : number; // 79
type CheckData = typeof data extends Object ? true : false; // true
type CheckScore = typeof score extends never ? {} : []; // []

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// age = 85; -> yes
// score.push(10); -> yes
// score.push("New Score"); -> yes
// let customAge: CustomAge = 50; -> yes
// let primitive: Primitive = new Date(); -> yes
// let years: CheckScore = []; -> yes