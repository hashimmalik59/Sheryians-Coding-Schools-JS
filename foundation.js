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

// 6. Find the sum of 1 to 100 using for loop
// let n = 0;
// for (let i = 1; i < 101; i++) {
//   n = n + 1;
// }
// console.log(n);

// 7. Print all numbers between 1 to 50 that are divisible by 3
// for (let i = 1; i < 51; i++) {
//   if (i % 3 === 0) {
//     console.log(`${i}: is divisible by 3`);
//   }
// }

// 8. Ask the user for a number and print whether each number from 1 to that number is even or odd
// e.g("1 is odd", "2 is even")

// 1. User se number lena
// let userNumber = prompt("Enter your number!");

// 2. Loop chalana 1 ya us number tak
// for (let i = 0; i <= userNumber; i++) {
//   // 3. Check karna even ya odd
//   if (i % 2 === 0) {
//     console.log(`${i}: Even Number`);
//   }
// }

//................................................

// 9. Count how many numbers between 1 to 100 are divisible by both 3 & 5
// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log(`${i}: is divisible by 3 & 5`);
// }

//.......................................................

// Q1. Stop at first multiple of 7
// Write a loop from 1 to 100 that:
// Print each number
// stops completely when it finds the first number divisible by 7

// for (let i = 1; i < 101; i++) {
//   console.log(i);
//   if (i % 7 === 0) {
//     break;
//   }
// }

// Q2. Skip multiples of 3
// Write a loop 1 to 20 that:
// Skip number divisible by 3
// Print all others
// Use continue
// Expected output:
// 1, 2, 4, 5, 7, 8, 10: (no 3, 6, 9 etc.);

// for (let i = 1; i < 21; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// 3. Prints first 5 odd number only
// Write a loop from 1 to 100 that
// Prints only 5 odd numbers
// Then stops the loop
// Use both if, continue, and a counter + break
// Expected output
// 1, 3, 5, 7, 9

// let count = 0
// for (let i = 0; i < 101; i++) {
//   if (i % 2 !== 0) {
//     count++;
//     console.log(i);
//   }
//   if (count === 5) break;
// }

// Common Confusion
// When to use for and when to use while loop

// Jab humein loop ka end pata ho like condition to yeh for loop hai
// Jab humein loop ka end nahi pata ho to like condition na pata ho to yeh while loop hai

//////////////////////////////////////////////

// Function

// what: function is a resuable specific code that we use again and again

// Why: Jab humein koi kaam foran nahi karwana apni marzi se karwana hai like button daba kar tab hum function ka use karte hain

// How: function a(){
// console.log("Hello");
// }
// a(); // invoke

// function declaration
function fncDec() { // Part1: function keyword and functionName()
  console.log("Function Declaration"); // Part2: curly brace "{}" k beech mein jo part hai usko body kehte hain aur is body mein woh code chalta hai
}
// fncDec(); // Part3: invoke

// Anonymous Function
const funcExp = function () {
  console.log("Anonymous Function");
}
// funcExp();
// jab kisi bhi function ka naam na to woh "Anonymous" function kehlata hai

// Arrow Function
const arrFnc = () => { // iska syntax arrow ki tarhan hai tabhi isko arrwo function kehte hain
  console.log("Arrow function");
}
// arrFnc();

// Parameter: yeh woh value hai jo function k parenthesis k andar hoti hai myName(name)
// Argument: yeh woh value hoti hai function k invoke wale parenthesis k andar hoti hai myName("Hashim")

// Default parameter: Jab humne pehle se paramters ko value di ho to yeh default parameters hai
function menWebsite(gender = "male") {
  console.log(gender);
}
// menWebsite("female"); // jab mein argument paas karunga to phir actual value woh hogi parameter ki

//................................................................

// rest operator

function toppersMarks(first, second, thrid, fourth, fifth) { // is case se bachne k liye hum rest operator use karte hain
  console.log(first, second, thrid, fourth, fifth);
}
// toppersMarks(99, 97, 94, 92, 90);

// Jab arguments bohat saare ho to humein utne hi parameters banane parengen matlab agar 10 agruments diye to 10 paramters bhi dene parengen to is case se bachne k liye hum ...rest opretor ko use karte hain aur same yahi operator hum arrays and object mein bhi use karte hain ukso hum wahan spread operator kehte hain

function topStdNames(...allStudents) {
  console.log(allStudents); // rest operator humein array return kar k deta hai
}
// topStdNames("Hashim", "Ahmad", "Malik", "Abdullah", "Hasssan"); // rest matlab jitne bach gaye un sab ko rest mein daal do

//...............................

// return keyword(wahin jo jahan se aaye thay)
function fullName(surName) {
  return "Hashim " + surName;
}
// const myName = fullName("Malik"); // is part mein return para hai yani value pari hai "Hashim" usko just return karna hai
// console.log(myName);

//...........................................

// First-Class-Function: woh functions, jo function ko values ki tarhan treat kar sakte hain

function myName(name) {
  // name();
}
myName(function () {
  console.log("Hashim");
});

// Higher-order-function: woh function jo k function ko return kare ya to function accept kare parameter mein

function x(item) { // yeh "x" aik higher-order-function hai kyun ki is mein "item" naam k parameter mein function
  // item();
}
x(function () {
  console.log("Mein item number1");
})

function outer() { // yeh bhi aik higher order function hai kyun ki yeh function return kar raha hai
  return function () {
    console.log("Higher Order Function");
  }
}
// outer()();

//...............................

// pure vs impure function

// pure: jo k bahar value ko change na kare like;
let y = 10;
function z() { // pure function
  console.log(y);
}
// z();

// impure: jo k bahar wali value ko change kare like;
function j() { // impure function
  console.log(++y);
}
// j();

//............................

// Closure: aik function jo return kare aik aur function aur return hone wala function hamesha use/acces karega parent function k variables ko

function outer() {
  const myAge = 24;
  return function getAge() { // inner function apne parent/outer function k variables ko use/access kar paraha hai
    console.log(myAge);
  };
};
// outer()();

function abc() {
  const abc = 1;
  function def() {
    const def = 2;
    function hij() {
      const ghi = 3;
      hij();
    }
    def();
  }
}
// abc();

// IIFE-Immediately Invoked Function Expression

(function () {
  // console.log("Hashim");
}
  ())

// Hoisting difference between declaration and expression

// d() // Hoisted ✅
function d() {
  console.log("sasdfsdf");
}

// f() // Hoisted ❌
let f = function () {
  console.log("sasdfsdf");
}

// Q1: What's the difference between function declaration vs function expression in terms of hoisting?

// n()
function n() {
  console.log("n");
}

// m()
var m = function () { // TypeError: m is not a function
  // let m = function () { // ReferenceError: Cannot access 'm' before initialization
  // const m = function () { // ReferenceError: Cannot access 'm' before initialization
  console.log("m");
}

// Q2: Use function declaration and log "Hello", so invoke before function body

// greet(); // Hello
function greet() {
  console.log("Hello");
}

// Q3: Convert this function delcaration into an arrow function

// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(2, 5));

const multiply = (a, b) => {
  return a * b;
}
// console.log(multiply(2, 5));


// Q4: Idenfity parameter and argument in a function

function welcome(name) { // (name) this a parameter
  return name;
}
// welcome("Hashim"); // ("Hashim") this is an argument

// Q5: Check the output

function mno(a, b, c, d) {
  return a, b, c, d;
}
// console.log(mno(1, 2, 3));

// Q5: Guess the output

function sayHi(name = "Guest") {
  console.log(`Hi ${name}`); // Hi Guest(because we have default parameters)
}
// sayHi();

// Q6: What is ...operator in parameter

function restOperator(...baqiValue) { // yeh rest operator hai jo k array return karta hai
  console.log(baqiValue);
}
// restOperator("Hashim", 24, true)

// Q7: Use rest parameter to accept any number of score and return the total.

function getScore(...score) {
  let total = 0;
  score.forEach(function (item) {
    return total = total + item;
  });
  return (total);
}
// console.log(getScore(2, 4, 6, 8))

// Q8: Check if age is greater than 18 than return "Adult"

function calcAge(age) {
  if (age < 18) return "Too Young"
  else return "Adult"
}
// console.log(calcAge(27));

// Q9: Create a function but mention return keyword and not return anything

function fff() {
  return;
}
// console.log(fff()); // undefined

// Q10: What does it mean when we say "functions are first class citizens"?

// woh function jis ko hum as a value ya as an argument use karen usko first-class-function kehte hain

let fnc = function () {
  console.log("First Class Function: as a value");
}
// fnc();

function val(a) {
  // a()
}
val(function () {
  console.log("first class function: as an argument");
})

// Q11: Can you call a function as a variable and then call it?
// Show how.

// let aaa = function () {
//   console.log("a");
// }
// aaa();

// Q12: Pass a function into another function and execute it inside

// function parent() {
//   return function child() {
//     console.log("Function inside function");
//   }
// }
// parent()();

function parent() {
  function child() {
    console.log("function inside another function");
  }
  child();
}
// parent();

// Q13: What is a closure? When is it created?

// Aik function jo k aik aur function ko return kare to yeh jo return wala function hai yeh apne parent function k variable ko use/access kare

function aaa() {
  let bca = 1;
  return function aac() {
    console.log(++bca);
  }
}
// aaa()()

// Q14: Convert function into an IIFE

function init() {
  console.log("Initialized!");
}
// init();


// (function () {
//   console.log("Initialized!");
// }());

// Practice

// 1: Write a BMI calculator

function calculateBMI(weight, height) {
  return weight / (height ** 2);
}
// console.log(Math.trunc(calculateBMI(40, 1.6)));

// 2. Create a reusable discount calculator (HOF)

// woh function jo k function mein function return kare ya phir function ko parameter mein use kare

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100)
  };
};
const ten = discountCalculator(10)
const twenty = discountCalculator(20)
// console.log(ten(1000));
// console.log(twenty(500));

////////////////////////////////////////////////////////////

// Arrays


// array: aik variable jis mein hum multiple values ko store kar sakte, in ordered way

// creating an array

//    indices    0  1  2  3  4 hamesha array ka 0 index se start hogi
const numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// accessing an array

// console.log(numbers[0]);
// console.log(numbers[1]);

// modifying an array

// numbers[4] = 3423423
// console.log(numbers);

//..................................

// array methods

// pop() => remove from end of an array
// push() => add from end of an array

// console.log(numbers.pop()); // remove => end
// console.log(numbers);

// console.log(numbers.push(10)); // add => end
// console.log(numbers);

// shift() => remove from start of an array
// unshift() => add from start of an array

// console.log(numbers.shift(10)); // remove => start
// console.log(numbers);

// console.log(numbers.unshift(55)); // add => start
// console.log(numbers);

// splice() => removing, add,

// console.log(numbers.splice(55)); // add => start
// console.log(numbers);

const fruits = ["Apple", "Banana", "Mango", "Orange"]

// console.log(fruits);

// Splice()
// first paramater: jahan se start karna hai(index number)
// second paramater: kitne items delete karne hain
// third paramater: yeh naye items ko insert karne k liye use hota hai(like: "Grapes", "Pineapple")

// Note: Second parameter mein 0 value se murad aik bhi delete na karo

// console.log(fruits.splice(1, 1, "Grapes", "Pineapple"));
// console.log(fruits);

// Slice()
// first paramter: kahan se start karna hai
// second paramter: kahan tak jana hai(yeh paramter exclude hai)

// Note: second paramter ka item shamil nahi hoga like 3 index pe "Orange" tha aur woh exclude(shamil) nahi tha

// const newFruits = fruits.slice(1, 3);
// console.log(newFruits);

// const myAllNames = ["Hashim", "Ahmad", "Malik"];
// console.log(myAllNames);

// const reverseNames = myAllNames.reverse();
// console.log(reverseNames);

// Note: reverse change original array

// sort()
// it arranges the array in numerically & alphabetically

// const evenNumbers = [4, 2, 8, 6];

// console.log(evenNumbers.sort());

// console.log(evenNumbers.sort(function (accending, decending) {
//   return decending - accending;
// }));

// Note: it returns in string

///////////////////////////////////////////////////

// const num = [1, 2, 3, 4, 5];
// console.log(num);


// forEach(): har item k upar aik aik baar function chalao, lekin kuch return na karo
// const double = num.forEach(function (item) {
//   return item * 2;
// })
// console.log(double); // undefined(yeh kuch return nahi karta)

// num.forEach((item) => {
//   // console.log(item * 2);
// })

// const num = [1, 2, 3, 4, 5];

// const add1 = num.map((value) => {
//   return value + 1;
// });

// console.log(add1); // map ne yahan new array bana kar usko modify kiya
// console.log(num); // original array pehle ki tarhan hai

// Filter(): filter sirf un items ko return karta hai jo k true hain aur orginal array ko change/modify nahi karta hai

// const marks = [10, 20, 30, 40, 50];

// const greaterThan30 = marks.filter((value) => {
//   return value > 30
// });
// console.log(greaterThan30);

// reduce(): new array return karta hai aur bari value ko reduce karta hai aik single value banata hai


const num = [1, 2, 3, 4, 5];

const output = num.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
  // Step1 = acc => 1 + 0 => 0 + 1 currentValue = 1
  // Step1 = acc => 2 + 0 => 1 + 2 currentValue = 3
  // Step1 = acc => 3 + 0 => 3 + 3 currentValue = 6
  // Sepp4 = acc => 4 + 0 => 3 + 4 currentValue = 7
  // Sepp5 = acc => 5 + 0 => 4 + 5 currentValue = 9
}, 0);

// console.log(output);

const arrObj = [
  { id: 1, key: 2 },
  { id: 3, key: 4 },
  { id: 5, key: 2 },
]

// find(): isko jaise condtion true dikhe to yeh foran return karta hai
let ans = arrObj.find(function (value) {
  return value.key === 2;
});
// console.log(ans);
// like isko pehle key 2 mil gai is ne direct return kardi

// some(): agar isko aik bhi true milgaya to yeh foran true return kar dega
const studentMarks = [10, 50, 45, 98];
const data = studentMarks.some(function (element) {
  return element > 75;
});
// console.log(data);

// Note: it behaves like OR || operator

// every(): isko har condtion true chahiye agar isko false mila to yeh foran false return karega
const studentAges = [10, 14, 7, 20];
const stdData = studentAges.every(val => val > 5);
// console.log(stdData);
// Note: its like AND && operator if all conditions is true than return true else false

//.................

// Destructring: is se hum array ya object ki individual values ko aik individual variable mein store kar sakte hain
// const arr = [, , , null, 20 - 5];
const arr = [1, "Apple", true, undefined, 20 - 5];

// const [first, second, third] = arr;

const [first, second, third, , fifth] = arr; // agar hum kisi aik index ko chorna chahe like, null ko to hum aisay khali destructure bhi kar sakte hain

// const [first = "a", second = "b", third, fifth = "default value hai yeh"] = arr; // aga array ka index empty hoto hum us k liye default value bhi de sakte hain

// console.log(arr);

// console.log(first); // 1
// console.log(second); // "Apple"
// console.log(third); // true
// console.log(fifth); // 15

// Note: agar value empty ho ya undefined hoto tab hi default values hi use ho gi

// Summary:
// Array destructuring se hum array ki values alag alag variables mein rakh sakte hain.
// Agar kisi index ki value undefined ho to aap default value assign kar sakte ho.
// Lekin agar value null, false, ya 0 ho, to wo default value nahi lagegi, kyunki wo defined hai.
// Aap kisi index ko skip bhi kar sakte ho just by leaving a comma,.

//..........................

// Spread Operator (...) ka kaam hota hai kisi array ya object ki values ko "phaila dena" ya "unwrap kar dena" — yani uske elements ko alag alag kar ke kisi naye container mein copy karna, reference nahi dena.

const familyMembers = ["Papa", "Mama", "Sister", "Me", "Brother"];
// console.log(familyMembers);

// const newMembers = familyMembers; // yeh original/reference le leta, yani jab mein original array familyMembers mein kuch change karunga to reference/newMembers array bhi automatically modify hoga, is situation se bachne k liye hum spread operator use karte hai

// console.log(newMembers);
// console.log(newMembers.shift());
// console.log(newMembers);

const newMembers = [...familyMembers]; // Spread Operator

// console.log(newMembers);
// console.log(newMembers.shift()); // chnage nahi horaha hai, kyun ki array ki copy hai yeh Spread Operator ki wajah se
// console.log(newMembers);

// Summary
// ... Spread Operator se hum array ya object ki values ko copy karte hain.
// Reference nahi banta, isliye original data safe rehta hai.
// Aksar use hota hai: copy banane, merge karne, function mein argument dene, ya naye element add karne ke liye.
// Lekin agar andar nested array / object ho to wo by reference copy hota hai(shallow copy).

// Practice Questions

// 1. Create an array with 3 fruits and print the second fruit.

// const myFruits = ["Apple", "Banana", "Orange"];

// console.log(myFruits[1]); // "Banana"
// console.log(myFruits.slice(1, 2)); // "Banana"

// 2. Add "Mango" at the end and "Pineapple" at the beginning of this array

// console.log(myFruits.unshift("Pineapple"));
// console.log(myFruits);
// console.log(myFruits.push("Mango"));
// console.log(myFruits);
// console.log(myFruits.splice(0, 0, "Pineapple"));
// console.log(myFruits);
// console.log(myFruits.splice(4, 0, "Mango"));
// console.log(myFruits);

// 3. Replace "Banana" with "Kiwi" in the array above.

// const myFruits = ["Apple", "Kiwi", "Guava"];

// console.log(myFruits);
// console.log(myFruits.splice(1, 1, "Banana"));
// console.log(myFruits);

// 4. Whats the difference between push and unshift?

// push(): adds an item at the end of an array
// unshift(): adds an item at the start of an array

// 5. Removes the last item from this array using a method:

// const myFruits = ["Apple", "Kiwi", "Guava"];

// console.log(myFruits);
// console.log(myFruits.pop());
// console.log(myFruits);

// 6. Insert "Red" and "Blue" at index 1 in this array:

// const colors = ["Green", "Orange", "Yellow"];

// console.log(colors);
// console.log(colors.splice(1, 0, "Red", "Blue"));
// console.log(colors);

// 7. Extrract only the middle 3 items of an array

// const nums = [1, 2, 3, 4, 5];

// console.log(nums);
// console.log(nums.slice(1, 4));
// console.log(nums);

// 8. Sort this array alphabetically and reverse it.

// const names = ["Hashim", "Abdullah", "Hassan"];
// console.log(names);
// console.log(names.sort()); // Abdullah, Hashim, Hassan
// console.log(names);
// console.log(names.reverse());
// console.log(names);

// 9. Use map() to sqaure each number

// const nums = [1, 2, 3, 4, 5];

// const square = nums.map(value => value ** 2);

// console.log(square);

// 10. Use filter() to keep numbers greater than 10:

// const nums = [5, 53, 32, 85, 10];

// const greaterThan10 = nums.filter(function (item) {
//   return item > 10;
// })
// console.log(greaterThan10);

// const nums = [1, 2, 3, 4, 5];

// const singleValue = nums.reduce((acc, currVal) => {
//   return acc + currVal;
// }, 0)
// console.log(singleValue);

// 11. Use find() to get the first numbers less than 10:

// const nums = [5, 53, 1, 85, 10];
// const findLessThan10 = nums.find(value => {
//   return value < 10;
// })
// console.log(findLessThan10);

// 12. Use some() to check if any student has scored below 35:

// const nums = [5, 53, 1, 85, 10];

// const below35 = nums.some((item) => {
//   return item < 35;
// });
// console.log(below35);

// 13. Use every() to check if all numbers are even

// const even = [2, 4, 6, 8];

// const checkEven = even.every(function (value) {
//   return value % 2 === 0;
// });
// console.log(checkEven);

// 14. Destructure this array to get firstName and lastName

// const myFullName = ["Hashim", "Ahmad", "Malik"];

// const [firstName, , lastName] = myFullName;

// console.log(myFullName);
// console.log(firstName);
// console.log(lastName);

// 15. Merge 2 arrays using Spread Operator

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const mergeTwoArray = [...arr1, ...arr2];

// console.log(arr1);
// console.log(arr2);

// console.log(mergeTwoArray);

// 16. Add "Pakistan" to the start of this array using spread operator

// const countries = ["USA", "UK", "China"];

// const newCountry = ["Pakistan", ...countries];

// console.log(countries);
// console.log(newCountry);

// 17. Clone this array properly (not by reference):

// const countries = ["USA", "UK", "China"];

// const newCountry = [...countries];

// console.log(countries);
// console.log(newCountry);
// console.log(newCountry.pop());
// console.log(countries);
// console.log(newCountry);

// Common Confusions

// 1. slice() vs splice()

// slice(): array ka hissa copy karta hai, aur new array return karta hai without changing original
// splice(): se hum array k items k kahin se bhi remove, insert, replace kar sakte hain(new array return karta hai)

// 2. map() va forEach()

// map(): new array return karta hai, aur array ki copy bana kar us hi ko transform/modify karta hai
// forEach(): new array return nahi karta hai, aur array ko console ya DOM k kaam aata hai

// 3. Big blunder with sort()

// .sort se hum array ko sort nahi kar payengen kyun k woh isko string mein convert kar dega

// const q = [3, 2, 8, 1];

// console.log(a.sort()); // ❌ Wrong way

// const s = a.sort((a, b) => { return a - b })
// console.log(s); // ✅ Best way

// Note: .sort se sirf hum alphbetically sort kar sakte hain aur agar numbers ko karna hoto sort mein callback le kar karna parega

///////////////////////////////////////////

// Object

// Object: is a collection of key value pair

// Key value pair
const obj = {
  // key   value
  name: "Hashim",
  age: 24,
  isStudent: true,
};

//...................................

// Dot vs Bracket Notation
// console.log(obj.name); // dot notation
// console.log(obj["name"]); // bracket notation

// Note: bracket notation is best practice

//...................................

// Nesting and Deep access
const studentData = {
  name: "Ali",
  age: 22,
  isStudent: true,
  skill: "Front End Developer",
  subjects: {
    one: "HTML",
    two: "CSS",
    three: "TailwindCSS/Bootstrap",
    four: "JavaScript",
    five: "ReactJS",
  },
  address: {
    area: "Tehsil Gor Khatri",
    landmark: {
      street: "01 Mohallah Baru",
    },
  },
}
// console.log(studentData.address.landmark.street);

//...................................

// Object Destructring

const { street } = studentData.address.landmark;

// Note: yaad rahe k key ka naam same hona chahiye like street jo studentData mein hai wahi street likhna zaroori hai

// console.log(street);

//...................................

// for...in: loop ko hum use karte hain jab humein kisi object ke andar jitni bhi properties hain un sab ko access karna ho — one by one.

for (const key in obj) { // key object ki key hai aur obj us object ka naam hai jo hume chahiye
  // console.log(key + ":", obj[key]);
}

//...................................

// Object.keys(): hamare object ki keys ko array mein daal deta hai like ["name", "age", isStudent]

// console.log(Object.keys(obj)); // ["name", "age", isStudent]

// Object.entries(): yeh bhi hamare object ko array mein daal deta hai lekin har index pe key value dono ko aik saath like: [ [ 'name', 'Hashim' ], [ 'age', 24 ], [ 'isStudent', true ] ]

// console.log(Object.entries(obj)); // [ [ 'name', 'Hashim' ], [ 'age', 24 ], [ 'isStudent', true ] ]

// Copying Objects

// Spread Operator
const obj2 = {
  a: "1",
  b: "2",
  c: "3",
};

const obj3 = { ...obj2 };

// console.log(obj2);
const sd = obj2.c = "see"
// console.log(obj2.c);
// console.log(obj3.c);
// console.log(sd);

// Object.assign(): yeh object ka reference lene k liye use hota hai like thora bohat spread operator

// console.log(Object.assign({ name: "Hashim" }, obj2));

// console.log(JSON.stringify(obj)); // yeh whole object ko string mein convert karte hain
// console.log(JSON.parse(JSON.stringify(obj))); // isko wapis object form mein convert kardega(deep clone)

// optional chaining: jab hum kisi object k andar ki nested property ko access karte hain, aur yeh shak ho k aaya yeh key exist bhi karti hai ya nahi to hum "?" lagane se JS error nahi dega, balkay undefined return karegi

const varKey = "isPass";

const oc = {
  name: "Hashim",
  age: 24,
  isStudent: true,
  [varKey]: true,
  address: {
    country: "Pakistan",
    city: "Peshawar",
  }
};

// console.log(oc.addreess?.country); // undefined

// computed property: Jab tum object ke key ko dynamically (run-time pe) banana chahtay ho, ya koi variable use karna chahtay ho as a key, to tum computed property ka use karte ho using square brackets []

// console.log(oc.isPass); // true

// 1. Create an object for a student with name, age, and isEnrolled

// const studentInfo = {
//   name: "Hashim",
//   age: 24,
//   isEnrolled: true,
// };
// // console.log(studentInfo);

// 2. Can an object key be a number or boolean? Try this

// const myObj = {
//   true: "yes",
//   24: "age"
// }
// console.log(myObj);
// console.log(myObj[true]);
// console.log(myObj[24]);

// 3. Access the value of "first-name" from this object:

// const myObj = {
//   "first-name": "Hashim",
// }
// console.log(myObj);
// console.log(myObj["first-name"]);

// 4. Given a dynamic key let key = "age", how will you access user[key]?

// const key = "age"

// const myObj = {
//   name: "Hashim",
//   [key]: 24
// }

// console.log(myObj);
// console.log(myObj["age"]); // 24
// console.log(myObj[key]); // 24

// 5. From the object below, print the latitude:

// const myObj = {
//   city: "Peshawar",
//   coordinate: {
//     longitude: 23.2,
//     latitude: 77.4
//   },
// }
// console.log(myObj);
// console.log(myObj.coordinate.latitude);

// 6. What will happen if coordinates is missing? How can you prevent errors?

// const myObj = {
//   city: "Peshawar",
//   coordinates: {
//     longitude: 23.2,
//     latitude: 77.4
//   },
// }

// console.log(myObj?.coordinate?.latitude); // undefined

// 7. Destructure the city and lat from the location object above:

// const myObj = {
//   city: "Peshawar",
//   coordinates: {
//     longitude: 23.2,
//     latitude: 77.4
//   },
// }

// const { city } = myObj;
// const { latitude } = myObj.coordinates;

// console.log(city);
// console.log(latitude);

// 8. Destructure the key "first-name" as a variable called firstName.

// const myInfo = {
//   "first-name": "Hashim"
// }

// const { "first-name": firstName } = myInfo;

// console.log(firstName); // "Hashim"

// 9. Use for-in to log all the keys of this object:

// const myInfo = {
//   name: "Hashim",
//   age: 24,
//   isStudent: true,
// }
// for (let key in myInfo) {
//   console.log(key);
// }

// 10. Use Object.entries() to print all key-value pairs as:

// const course = {
//   title: "JavaScript",
//   duration: "4 weeks"
// }

// Object.entries(course).forEach(item => console.log(`${item[0]}: ${item[1]}`));

// 11. Copy this array with spread operator

// const original = { a: 1, b: 2 };

// const { newObj } = { ...original };

// console.log(original);
// console.log(newObj);

// 12. Deep clone object safely:

// const oldObj = { info: { score: 70 } }

// const newObj = JSON.parse(JSON.stringify(oldObj));

// console.log(newObj);
// const change = newObj.info.score = 20;
// console.log(newObj);

// 13. Rewrite this safely using optional chaining:

// const person = {};
// console.log(person);
// console.log(person?.profile?.name);

// 14. Use a variable to dynamically assign a property

// const key = "role";

// const varObj = {
//   name: "Hashim",
//   [key]: "Front End Developer",
// }
// console.log(varObj);
// console.log(varObj[key]);
// console.log(varObj.role);

// Common Confusion

// Deep copy vs Shallow copy

// Deep copy: poore complete ki copy karta hai
// Shallow copy: sirf top level yani main object ki hi copy karta hai