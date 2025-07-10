// words vs keywords in JS

// words: jin ka JS mein koi kaam nahi.
// what
// kuch bhi
// food

// .........................................................

// keywords: Jin ka JS mein koi kaam hai.
// if
// for
// function

///////////////////////

// var let const
// declaration vs intialization

// var a; // declaration
// var a = 10; // initialization

// window mein add hota hai
// function scoped hota hai
// aap is ko phir se declara kar sakte ho error nahi aayega

//////////////////////////

// scope(global, block, function)

// Global:
// * Jo k khula mein variable bana ho.
// * Global poore code mein kahin bhi use hosakta hai.

// Example;
// var name = "Hashim";
// let age = 23;
// const birthYear = 2002; // ab yeh 3 variables is file mein kahin bhi use kar sakte hain, kyun k yeh global scope hai.

// ..........................................................................

// Function:
// * var keyword function scoped hota hai.
// * var keyword har jagah access hota hai sirf function k bahir access nahi hota.

// Example;

// function x() {
//   if (true) {
//     var z = 10;
//     console.log(z); // ab yeh var z = 10 function k bahir access nahi hosakta hai aur yeh function scoped hai
//   }
// }
// x();

// .............................................................................

// Block
// * {} curly braces k andar wala hissa block hai.
// * Aur let & const keyword block scoped hain block k bahir inko access nahi kiya jaa sakta.

// Example;
// {
//   let y = 50;
//   const i = 100; // ab let & const keyword ko mein block {} k bahir access nahi kar sakta, kyun k yeh block scope hain
// }

/////////////////////////////////////////////////////////

// Reassignment and Redeclaration

// var v = 10;
// v = 40; // reassignment(dobara value dena(assigning))
// var v = 90; // redeclaration(dobara value ko same naam(declare) se use karna)

////////////////////////////////////////////////////////////

// TDZ: Temporal Dead Zone => Yeh woh area hai k jis mein JS ko pata hai k variable exist karta hai, but woh variable ko access nahi karsakta aur TDZ let aur const pe use hota hai

// Example;

// console.log(e); // ReferenceError: Cannot access 'e' before initialization
// console.log(f); // ReferenceError: Cannot access 'f' before initialization

// let e = 80;
// const f = 60;

// Note: variable banne se pehle us variable k top/oopar jitna space bacha hai woh space TDZ like 'e' variable bana line 84 par hai aur line 84 se oopar is "e" variable ka TDZ hai

// ......................................................................

//////////////////////////////////////////////////////////

// ...............................................

// Hoisting impact per type
// Hoisting => Jab JS mein variable banta hai to woh 2 hisso mein toot jaata hai, delcaration wala part oopar chala jaata hai aur initialization wala part neeche reh jaata hai

// Example;
var g = 10;

var g = undefined; // yeh line 98 do parts mein toot-ti hai pehle 100 wali line declaration part oopar chali jaati hai
g = 10; // aur dusri line 101, initialization wala part neeche reh jaata hai.

// Note: Hoist hone k duran yeh 98 line wala variable do parts mein line 100 aur line 101 k jaisa ban jaata hai

// var => hoist => undeifned
// let => hoist => referenceError: Cannot access "example" before initialization
// const => hoist => referenceError: Cannot access "example" before initialization

///////////////////////////////////////////////////////////////////////////////////////

// Primitive =>
// string => '', "", ``
// number => 2 to the power of 53
// boolean => true or false
// null => stand alone value, empty value and value hai but khali hai jaan boojh kar value nahi di
// undefined => jab aapne variable banaya par value nahi di to by default jo value hogi woh undefined hai
// symbol => yeh unique banane k liye use hota hai
// bigInt => yeh largest number k liye use hota hai

// Reference => Inko copy karne par real copy nahi milegi but apko reference milega parent ka
// array[], function(), object{}
let a = [1, 2, 3];
let b = a;

// console.log(`Before pop: [${a}]`);
// console.log(`Before pop: [${b}]`);
// b.pop();
// console.log(`After pop: [${b}]`);
// console.log(`After pop: [${b}]`); // yeh saath mein original value ko bhi change karta hai kyunki yeh referenced type hai

let myData = {
  firstName: "Hashim",
  lastName: "Malik",
  age: 24,
  greet: function () {
    return `Hello ${this.firstName}`;
  },
};

// console.log(myData);
// console.log(myData.greet());

// myData.lastName = "Ahmad"; // reference le raha hai tabhi original ko change kiya hai
// console.log(myData);

// ..............................................

///////////////////////////////////////////////////////////////////////

// Dynamic Typing: is mein humein batane ki zaroorat nahi hoti k variable ka type kya hai JS dynamic hai yahan type kisi bhi waqt change hosakta hai

// ...............................................

// type coercion: jab kisi value ka type automatically(implicitly) change hojaye
// example:
let value1 = 7;
let value2 = "2";

// typeof: yeh aik operator hai, jo k value ka type batata hai
console.log(typeof value1);
console.log(typeof value2);

console.log(value1 - value2); // is ne automatically value to coerce(convert) kardiya hai
console.log(typeof (value1 - value2));

// ...............................................

// Truthy vs Falsy value: Woh values jo k boolean mein convert ho kar koi value return kare

// Falsy values: 0, "", false, null, undefined, NaN, documented.all
// Truthy values: falsy values k ilawa sab truthy values hain
