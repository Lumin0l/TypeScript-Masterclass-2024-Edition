/* Readonly */
// It means we cannot modify, change or add anything to the lists declared as readonly
// Summary, 3 ways of decaring it: 
// let item: radonly number[] = etc...
// type item = Readonly<number[]>
// type item = ReadonlyArray<number>


// An array can be converted into readonly using the readopnly keyword
let number: readonly number[] = [1, 2, 3];

// Once an array is readonly no values can be added or removed from an array
number.push(1);

// A tuple can be read only also
type ReadOnlyTuple = readonly [string, string, number];

// For our example let's create a new Tuple which is readonly
type ReadOnlyPerson = readonly [string, string, number];

// Creating a new readonly person
const person: ReadOnlyPerson = ["John", "Smith", 32];

//  There are some alternavites for creating Readonly Arrays
type a = Readonly<string[]>;
type b = ReadonlyArray<string>;

// They can olso be type unions
type c = Readonly<(string | number)[]>
type d = ReadonlyArray<string | number>

//  Alternative syntax for Readonly Tuple
type f = Readonly<[string, string, number]>;