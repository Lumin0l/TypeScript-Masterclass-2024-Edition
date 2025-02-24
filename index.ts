/* Const Enums are not compiled into JS, but their value is */
// We can leverage that for performance reasons, but in general it's just better to use normal enums.


// Redeclaring the same  using Enum
// const Enum, is not compiled in JavaScript as an Object but only the value is used
const enum EDirection {
    Up,
    Down,
    Left,
    Right,
  }
  // Show the use of value
  let eDirection = EDirection.Up;
  
  // Declaring an object with same values as a constant
  // Typescript sets each property as readonly
  const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;
  
  // Now this acts as an enum because you cannot change the value of properties
  console.log("Object as const", ODirection.Up);
  ODirection.Up = "newValue";