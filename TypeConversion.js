// //   Type Conversion  
// JavaScript is a dynamically typed language meaning variables do not have a fixed type. 
// While this makes coding flexible it also introduces automatic type conversion also known as type coercion.

// One of the most common cases of type coercion happens when JavaScript automatically converts a string into a number.
//  This behavior occurs when a string is used in a numeric operation such as addition subtraction comparison or multiplication.

// Type conversion refers to converting one data type into another.
//(1) Convert a String into Nuumber :-
let erpNo="25";// Only  (-),(*),(/) this opretar is automatically  convert Strin into Number 
console.log(erpNo-3);// output is 22
// (2) Convert a Number into String  :- 
let enrollNo=23;//only  (+) Opretar is automatically convert number into string.
console.log(enrollNo+"csa3bc105");// output is 23csa23bc105.

if("Taniya"){
    console.log("Hi aman");// this is correct because if cndition run on tru condition and any not empty string is true.
}




//JavaScript Does NOT Convert Strings to Numbers in Concatenation
// concatination is use for joiing strin together its not changing data campare to type conversion
// if we are string to number convert in concatination the we will use Unary + oprater like this
console.log(Number("50") + 10); 
console.log(+"50" + 10);  // int this use unary + for convertin .

let numStr = "42";
let num = Number(numStr); // Convert string to number this is second option .
console.log(+numStr+ 10);
