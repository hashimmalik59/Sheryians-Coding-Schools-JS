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

// 1. Variables and Declarations
// Common Confusions?

// Why var leaks outside block but let doesn't?
// var keyword hamesha sirf function ki respect karta hai isi wajah se var function scoped hai aur let & const har block
// "{}"/ curly braces ki respect karte hain isi wajah se let & const block scoped hain

// Why const allows to changing object properties?
// const keyword mein reassingment allowed nahi hai, but object ki key ko update/modify liya jaa sakta hai

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
// console.log(typeof value1);
// console.log(typeof value2);

// console.log(value1 - value2); // is ne automatically value to coerce(convert) kardiya hai
// console.log(typeof (value1 - value2));

// ...............................................

// Truthy vs Falsy value: Woh values jo k boolean mein convert ho kar koi value return kare

// Falsy values: 0, "", false, null, undefined, NaN, documented.all
// Truthy values: falsy values k ilawa sab truthy values hain

// ....................................................

// 2. Datatypes + Types Systems
// Common Confusion?

// Why NaN is a number?
// NaN JS mein aik failed number operation hai jab number k saath koi non-number ka operation hoga to woh failed number operation hoga NaN

// ...................................................

// null vs undefined?
// null: aik value hai jo k stand-alone value/empty value(value hai but khali hai)
// undefined: jab hum variable ko value assign nahi karte to woh jo by default value deta hai woh value undefined hoti

// ...................................................

// Why "5" + 1 => 51 & "5" - 1 => 4
// "+" operator ka JS mein 2 kaam hain aik plus/addition karna aur dusra concatenation(2 values ko jorna) karna
// "-" operator ka JS mein 1 hi kaam hai minus/subtraction karne ka to is wajah se yeh string ko behind the scene coerce karta hai hai operation karta hai

/////////////////////////////////////////////////////////////////

// Operators

// Arithmetic: +, -, *, /, %, **

// +: Plus Operator JS mein 2 kaam karta hai string ko jorne(contenation) ka kaam aur 2 operands ko add karne ka kaam karta hai
// console.log("Hashim" + 4);

// **: Exponentiation Operator JS mein power ka kaam karta hai like (3 to the power of 2) => (3 ** 2) => 9
// console.log(3 ** 2); // 9

// %: Modulus Operator JS mein yeh kaam karta hai k do value k divide hone k baad jo remainder bachay woh modulus hota hai
// console.log(5 % 2); // 0

// Note: Baqi sab arithmetic operators same kaam karte hain jaisa k maths mein hota hai

//.....................................

// Comparison: ==, ===, !=, !==, <, >, <=, >=

// ==:

//////////////////

// Comparison: ==, ===, !=,!==, >, <, >= , <=

// ==: yeh sirf value check karta hai like
// console.log(2 == '2'); // true because yeh behind the scene automatically type convert(coerce) karta hai

// ===: yeh value aur type dono check karta hai like
// console.log(2 === '2'); // false because aik number hai aur aik string hai

// !=: yeh not loose equality operator hai jo check karta hai k value bara nahi hai like:
// console.log(3 != '3'); // false

// !==: yeh not strict equality operator hai jo check karta hai k value aur type eqaul hai ya nahi like:
// console.log(2 !== '2'); // true

// Note: Baqi sab comparison operator same kaam karte hain jaise Maths mein karte hain

/////////////////////

// Assignment: =, +=, -=, *=, /=, %=,
// =: Assignment operator yeh aik value ko variable mein value ko assign karta hai like let a = 5 ab a ko 5 assign kardiya hai
// let a = 5;

// a += 2 // (a = a + 2 ka short hand hai) yeh a mein w ko plus karta hai aur a ko update karta hai
// console.log(a)

// Note: baqi sab bhi same kaam karte hain jaise += kar raha hai

//////////////////

// Logical: &&, ||, !

// &&: AND Operator hai jo jab sab values true hongi to true return karega aur agar jab aik bhi false hogai to false return karega
// console.log(true && true) // true
// console.log(false && true) // false
// console.log(true && false) // false
// console.log(false && false) // false

// ............

// ||: OR Operator yeh jab aik value bhi true hoto true return karega aur aagr sab values false hoto false return karega like
// console.log(true || true) // true
// console.log(false || true) // true
// console.log(true || false) // true
// console.log(false || false) // false

// ..................

// !: NOT Operator yeh karta hai ja value true hoto false return karo aur agar false hoto true return karo like
// console.log(!true) // false
// console.log(!false) // true
// console.log(!0) // true
// console.log(!1) // false

/////////////////////

// Unary: Unary Operator woh operator hai jo k aik hi operand pe kaam karta hai like
// let b = '5'
// console.log(+b) // ab yeh aik hi operand pe kaam kar raha hai
// console.log(-b) // yeh bhi

let c = 2;
// console.log(c++) // post increment
// console.log(++c) // pre increment
// console.log(c--) // pre decrement
// console.log(--c) // post decrement

// post baad mein incre/decre karo pehle purani value ko return karo aur pre incre/decre mein pehle plus/minus karo aur saath mein return karo

// ..............

// typeof: typeof aik operator hai jo k value ki type batata hai like console.log(typeof 5)
// console.log(typeof 5) // number
// console.log(typeof 'Hashim') // string
// console.log(typeof true) // boolean
// console.log(typeof null) // object yej JS mein error/bug hai

// !: Logical NOT bhi aik unary operator hai yeh true ko false return karta hai aur false ko true return karta hai

// console.log(!true) // false
// console.log(!false) // true
// console.log(!0) // true
// console.log(!1) // false

// instanceof: yeh bhi aik operator hai jo k yeh check karta hai k non-primitive values ka type ya nahi like let a = {}

/*
 let a = {}
console.log(a instanceof Object) // true

 let b = []
console.log(b instanceof Array) // true

let d = () => {
  console.log('Function')
}
d()
console.log(d instanceof Function)
// true

// Note: its only worked on non-primitive/reference type
*/

// Bonus concept: !!0
// yeh value ka truthy ya falsy nature banate k liye ue hota hai
// console.log(!!0);
// console.log(!!1);

// Practice Question

// const marks = 50;

// const result = marks >= 90 ? "A+" : "Fail";
// console.log(result);

////////////////////////////////////////////////////////////////////

// Control Flow

// if else / else-if

// if: jab condition true hojaye to yeh block return karo
// else: agar if ki condition false hojaye to else chala do

// else-if: jab hamare paas mutliple conditions ho to hum else-if use karta hain

// const age = 10;

// if (age >= 18) {
//   // jab yeh condition true hogi to yeh chalay gi aur agar yeh condition false hogi to else chalay gi
//   console.log(`Adult due to ${age}`);
// } else {
//   console.log(`Not Adult due to ${age}`);
// }

// Mutiple conditions
// const marks = 99;
// let grade;
// if (marks <= 100 && marks >= 90) {
//   grade = "A";
// } else if (marks <= 89 && marks >= 80) {
//   grade = "B";
// } else if (marks <= 79 && marks >= 70) {
//   grade = "C";
// } else if (marks <= 69 && marks >= 60) {
//   grade = "D";
// } else if (marks <= 59 && marks >= 50) {
//   grade = "E";
// } else if (marks <= 49 && marks >= 0) {
//   grade = "FAIL!";
// } else {
//   console.log("INVALID MARKS");
// }
// console.log(grade);

//...................................................

// Switch Case: yeh bhi aik control structure jo k kisi expression/value ko multiple possible values k against compare karta hai, usay multiple predefined cases ke against match karta hai, and yeh alternate hai if-else-if chain yeh short and cleaner version hai else-if ka

// switch ("1") {
//   case 1:
//     console.log(1);
//     break; // break ek control flow keyword hai jo kisi loop ya switch block se forcibly bahar nikalne ke liye use hota hai.
//   case 2:
//     console.log(2);
//     break;
//   case 3:
//     console.log(3);
//     break;
//   default: // yeh jab koi condition true naho tab yeh chalega like else
//     console.log("default == else");
// }
// // Note: Yeh Strict Equality === par chalta hai

//........................................................

// Early return pattern: Galat ya special conditions ko start me hi handle kar lo, taake baaki code simple aur seedha ho.

// function checkMarks(marks) {
//   if (marks < 25) return "D";
//   else if (marks < 50) return "C";
//   else if (marks < 75) return "B";
//   else return "A";
// }
// console.log(checkMarks(56));

// Pratice Exercise

// Write a function getGrade(score) that:
// Takes student marks (0 to 100)
// return the grade based on logic:

// function getGrade(score) {
//   if (score <= 100 && score >= 90) return "A+";
//   else if (score <= 89 && score >= 80) return "B";
//   else if (score <= 79 && score >= 70) return "C";
//   else if (score <= 69 && score >= 60) return "D";
//   else if (score <= 59 && score >= 50) return "E";
//   else if (score <= 49 && score >= 0) return "Fail";
//   else return "INVALID";
// }
// console.log(getGrade(75));

// Rock-Paper-Scissor Game
// function rockPaperScissor(userTurn, computerTurn) {
//   if (userTurn === computerTurn) return "Draw";
//   else if (userTurn === "Rock" && computerTurn === "Scissor") return "User";
//   else if (userTurn === "Paper" && computerTurn === "Rock") return "User";
//   else if (userTurn === "Scissor" && computerTurn === "Paper") return "User";
//   else return "Computer";
// }
// const gameResult = rockPaperScissor("Scissor", "Paper");
// console.log(gameResult);

// Common Confusion:
// Control Flow:
// Fall-through in switch case

// const workingDays = "thur";
// switch (workingDays) {
//   case "mon":
//     console.log("Monday");
// break; // agar hum ne "break" keyword use na kiya to woh tab tak chale ga jab tak agla "break" keyword na aajaye aur default se oopar wale case mein chala to phir default bhi saath hi chalega
//   case "tue":
//     console.log("Tuesday");
//     break;
//   case "wed":
//     console.log("Wednesday");
//     break;
//   case "thur":
//     console.log("Thursday");
//     break;
//   case "fri":
//     console.log("Friday");
//     break;
//   default:
//     console.log("Weekend");
// }

////////////////////////////////////////////////////

// Loop
// Code ko repeat karne ko hum loop kehte hain

// Kahan se jana hai => Kahan tak jaana hai => Kaise jaana hai
// for loop

// 1-50 (for loop)
// 25-30 (for loop)

// initialization; let i = 1
// condition; i > 51
// updation; i++

// for (intialization; condition; updation) {
//   console.log("Print Here");
// }

// for (let i = 1; i < 51; i++) {
//   console.log(i);
// }

// Kahan se jaana hai => Kab tak rukna hai => Kaise jaana hai
// while loop

//.....................................................

// tab tak chalna jab tak "hello" na aajaye (while loop)
// tab tak soo jab tak alarm na baj jaye (while loop)

// initialization
// while (condition) {
//   console.log("Print Here");
// Updation
// }

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//........................................

// do-while
// at least aik baar to chalo beshak condition false hi kyun na ho

// intialization
// do {
// console.log("Print Here");
// Updation
// } while (condition);

// let i = 30;
// do {
//   console.log(i); // condition false hogai but aik baar chala zaroor
//   i++;
// } while (i < 10);

//........................................

// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     // break; // specific condition pe jaa kar stop kardeta hai aur diya gaya number inclusive hai
//     continue; // continue matlab di gai condtion par rukna mat aur usko chor kar aage jaari rakhna
//   }
//   console.log(i);
// }

// Practice Questions

// 1. Print numbers from 1 to 10 using for loop
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 2. Print the number from 10 to 1 using while loop
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// 3. Print even number from 1 to 20 using for loop
// for (let i = 0; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i}: Even Number!`);
//   }
// }

// 4. Print odd number 1 to 15 using while loop
// let i = 1;
// while (i < 16) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// // 5. Print the multiplication table of 5
// for (let i = 5; i < 55; i += 5) {
//   console.log(`${i}`);
// }
