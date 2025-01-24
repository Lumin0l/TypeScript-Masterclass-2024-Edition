// This would work because your forcing typescript to be open to the type of name:
namespace Section3Any {
let name: any = "Mark";
name = 5;
// This would not work because TS is inferring the specific values to their variables:

let name2 = "Mike"; // This will be typed to string
// @ts-ignore
name2 = 5 // This will throw an error because name2 is typed to string.

}

