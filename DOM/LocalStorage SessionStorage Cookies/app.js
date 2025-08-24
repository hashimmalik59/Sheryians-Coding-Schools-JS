// Local Storage, Session Storage, and Cookies

// localStorage => is mein hum data ko browser mein store karte hain
// 1. Browser ko band karne k baad bhi data delete nahi hota
// 2. Data tab tak store rahega jab tak khud remove na karlo
// 3. 5Mb data storage

// Data store karna
const storingData = localStorage.setItem("firstName", "Hashim");

// Data fetch/get karne
const fetchData = localStorage.getItem("firstName");

// Data remove karna
const removeData = localStorage.removeItem("lastName");

// Data update karne
const updateData = localStorage.setItem("firstName", "Ahmad");

// Sab kuch ko clear karne k liye clear()
const clearData = localStorage.clear();

// Note: setItem() hum data ko store karne k liye use karte hain but data ko update karne k liye bhi use karte hain, agar data mein key pehle se exist karti hai to data update hoga warna data store hoga jaise mein ne upar setItem mein pehle se "firstName" ki key use ki hui hai aur value mein "Hashim" pass kiya hua to update mein, mein ne "firstName" wali key ko use kiya to phir uski value store nahi hui balke update hui

// Note: localStorage ka data by default string mein hota hai agr hum data ko non-string type/format mein rakhe to woh automatically string mein convert hojayega

localStorage.setItem("age", 24); // (number -> string -> "24")
localStorage.setItem("isStudent", true); // (boolean -> string -> "true")
localStorage.setItem("user", { name: "Hashim", age: 24 }); // (object -> string, but useless) "[object Object]"
localStorage.setItem("emptyValue", null); // (null -> string -> "null")

// sessionStorage => yeh temporary data store karta hai, tab close kiya to data delete hojayega
// 1. 5Mb data storage

// Data store karna
const sessionDataStorage = localStorage.setItem("lastName", "Malik");

// Data fetch/get karne
const sessionDatafetch = sessionStorage.getItem("middle", "Ali");

// Data remove karne
const sessionDataremove = sessionStorage.getItem("middle");

// Data update karne
const sessionDataupdate = sessionStorage.getItem("middle", "Khan Baba");

// Sab kuch ko clear karne k liye clear()
const sessionDataClear = sessionStorage.clear();

// cookies => yeh bhi data ko store karne k liye use hota hai lekin tab band karne par bhi data rahega, browser mein cookies naam k data mein store hota hai, yeh kam/light/chota data store karne k liye use hota hai
// 1. 4kb data storage

// JSON.stringify() => yeh aik method hai jo k kisi JS object/array/value ko JSON string mein convert karne k liye use hota hai
// like: object/array => string
localStorage.clear();

// const skills1 = localStorage.setItem("skills1", JSON.stringify(["HTML", "CSS", "JS"])); // ["HTML", "CSS", "JS"]
// const skills2 = localStorage.setItem("skills2", JSON.parse(["HTML", "CSS", "JS"])); // ["HTML", "CSS", "JS"]
// const skills3 = localStorage.setItem("skills2", ["HTML", "CSS", "JS"]); // '["HTML", "CSS", "JS"]'

const user = { name: "Hashim", age: 24 };
const a = JSON.stringify(user);
const b = JSON.parse(user);

// JSON.parse() => yeh bhi aik method hai lekin yeh JSON.stringify() ka ulta karta hai yani yeh object/array ko string bana kar show karta hai aur yeh wapis "object/array" ko real object/array banata hai
localStorage.setItem("friends", JSON.stringify(["Hashim", "Ahmad", "Malik"]));

const z = JSON.parse(localStorage.getItem("friends"));

// Common confusions?

// 1. Why only strings works in localStorage?
// localStorage mein by default non-string type ka data rakhe to woh string hi hoga

// 2. Understanding cookies
// cookies mein hum authentication like, k hume logIn rahe to aik token hota hai uska use karte hain cookie mein warna agar token na hoto woh logOut hojayega