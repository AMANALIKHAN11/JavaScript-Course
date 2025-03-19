//                         Introduction of JavaScript Execuution
//Understanding JavaScript execution helps trace errors effectively and fix issues efficiently.
//  Let’s break this down step by step.

// JavaScript is a Interprator language because it is execute the code line by line. so here some point 
// of javascript execution
// 1. Debugging Becomes Easier :-
//                                undifiend variable , scope issues, memmory leaks can be traced 
//undiiend varaiable :- varaiable hosting is example of undifiend variable but let and const is cannot hosting
// because it TDG is take on them
      console.log(x);// undifined // trace error
      var x=89;
      console.log(x)// 89// fix issues.
// scope issues :- we have a  local scope, global scope , function scope, lexical scope
//  local scope &  block scope:- local scope  alaways inside the scope and never accses outside scope.
{
    let name="aman";// local scope
    console.log(name);// aman // fix issues
    var acess=89
}
console.log(acess);//acessibe // 89 // is not follow block scope
console.log(name);// error // scope issues

// Global Scope :- Global varaiable and scope always acesseible everywhere
let number=89;
function Solve(){
    console.log(number);// 89 
}
console.log(number);//89// 

// Function Scope :-
function scope(){
    let number1 =100;
    var number11=90;
    console.log(number1)// 100
    console.log(number11)// 90 // fix issues 
}
console.log(number1);// reference error 
console.log(number1)// reference error

///                                   BEST PRACTICE TO AVOID SOPE ISSUES
// Always use let and const instead of var to avoid scope leakage.
// Declare variables at the beginning of their scope to avoid hoisting issues.
// Use strict mode ("use strict";) to catch undeclared global variables.
// Use strict mode ("use strict";) to catch undeclared global variables.


//                             2. Performance Optimization

// 1 JavaScript Engines Optimize Execution for Speed

// JavaScript engines like V8 (Chrome, Node.js), SpiderMonkey (Firefox), and 
// JavaScriptCore (Safari) are built to execute JavaScript efficiently.

// 2 How do engines optimize JavaScript?

// JIT Compilation (Just-In-Time Compilation) – Converts JavaScript into machine code at runtime for faster execution.
// Hidden Classes & Inline Caching – Optimizes object property access.
// Garbage Collection (GC) – Frees unused memory to prevent leaks. 
// Example of Optimization.
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); //  Optimized by V8's JIT compilation
console.log(add(100, 200)); 


// How to Optimize JavaScript Performance?

// Problem	                             Why It’s Bad?	                            Best Practice
// Inefficient Loops:=>	      Loops that check length repeatedly slow execution	     Store arr.length in a variable
// Memory Leaks :=>	          Objects remain in memory longer than needed	          Set references to null when done
// Blocking UI:=>             Long computations freeze the UI	                       Use Web Workers or async functions
// Object Property Access:=>  Accessing properties inefficiently slows execution	  Use structured objects for optimization



// 3. Handling Asynchronous Code Correctly

// JavaScript uses an event-driven, single-threaded model,
// meaning it cannot execute multiple operations at the same time.
// Without understanding execution mechanics, 
// asynchronous code (Promises, Async/Await, Callbacks) can cause confusion and errors.


//      How JavaScript Runs in a Browser vs. Node.js

// JavaScript Can Run in Two Main Environments
//1  Browser (Client-Side Execution):=>
    //Browsers have JavaScript engines like V8 (Chrome, Edge), SpiderMonkey (Firefox), and WebKit (Safari) to execute JavaScript.
   // It can interact with the web page (HTML, CSS) and modify the DOM (Document Object Model).
   // It has browser-specific features like Fetch API, setTimeout, event listeners, etc.
   //example
   document.getElementById("btn").addEventListener("click", function () {// jaise user button  click krega tb javascript alert krega
    alert("Hello! You clicked the button.");                         // or y DOM k sath intrect krega becasue it change the dom.

});

//2 Node.js (Server-Side Execution)
       // It uses the V8 JavaScript Engine but without a browser.
    //    Unlike browsers, it does not have a DOM, but it can work with files, databases, and network requests.
//        It follows an event-driven, non-blocking architecture, making it perfect for real-time applications (e.g., chat apps, live updates, APIs, etc.).
const fs = require("fs");

fs.writeFile("example.txt", "Hello from Node.js!", (err) => {
    if (err) throw err;
    console.log("File written successfully!");
});
// The fs (File System) module creates a file and writes data to it.
// This code runs on the server, not in the browser.
