"use strict";
// Types can be casted other types.
// This shoudl be done when you are sure that TypeScript is not able to infer the types correctly
let firstName = "Mark";
let lastName = "Doe";
let user = {
    name: "Mark",
    email: "mark@email.com",
};
function fetchUser() {
    return user; // or "return <User> user"
}
const fetchedData = fetchUser();
