"use strict";
const students = [
    {
        name: "John",
        score: 70,
    },
    {
        name: "Mark",
        score: 90,
    }
];
for (const student of students) {
    console.log(`${student.name} scored ${student.grade}`); // Typescript will showcase errors or mistakes since it "stores" the type. You can also view further info hovering and picking view problem.
}
