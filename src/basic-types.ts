var isWinter: boolean = true;
isWinter = true;
console.log(isWinter);

var count: Number = 5;
var name1: string = "Shubh";

var nArray: Number[] = [5, 4, 6];

var sArray: string[] = ["Shubh", "Swaraj", "Rohini"];

let fruits: Array<string> = ["Apple", 'Banana']; // using generic array

var aArray: any[] = ["Yogesh", "Sujata", 5, 6, { id: 5, fName: "Vidya" }]



enum Starks { 'Sachin', 'Vikrant', 'Vinayak', 'Kiran' };
var stark = Starks.Kiran;

function getName(): string {
    return "Shubhangi";
    // return 1
}

// tuple 

let x: [string, number, boolean] = ["Pawar", 7, true];
x = ["Shubh", 12, true];

/*
let x : [string, number] = ["Pawar" , 7];
x = ["Shubh", 12];
*/
var x1 = x[0];
console.log(x1);
// x = [12, "shubh"];

// union type

let code: (string | number);
code = "Meghraj";
code = 22;
// code = true;

//unknown
var maybe: unknown = 12;
maybe = "Pawar";
if (typeof maybe === "string") {
    console.log(maybe);
}

let exampleAny: any;
let exampleUnknown: unknown;
exampleAny = {}
exampleAny = 123;

exampleUnknown = {};
exampleUnknown = 123;

console.log(exampleAny.toFixed());
if (typeof exampleUnknown === "number") {
    console.log(exampleUnknown.toFixed());
 }