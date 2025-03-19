//                                         Hosting
// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before execution.
// This means you can use variables and functions before they are declared in the code.

// Functions are hoisted completely.
// var is hoisted but initialized as undefined.
// let & const are hoisted but not initialized (TDZ issue).

// Function Hoisting  in two Type 
// 1 Function Decleration
// 2 Function Expression

// 1 Function Decleration :- Functions declared with function are fully hoisted
print(); // is called before it is defined // js hoists the function declartion to the top 

function print() {
    console.log(" Hello World");// making it accessible throughout the scope.
//hello world is output 
}

// 2 Function Expression :- Function Expressions (Not Hoisted)
//                          Functions stored in variables are NOT fully hoisted.

greet();  //  TypeError: greet is not a function

var greet = function () {
    console.log("Hello!");
};
//  var greet is hoisted as undefined, but the function is assigned at runtime.
//  Since greet is undefined at the time of calling, it throws an error.
//  The same behavior applies to let and const function expressions.

// Best Practice
let a=87;
console.log(a);
//good 
function Add(a,b){
    return a+b;
}
console.log(Add(20,30))
//good

const multiply = (a, b) => a * b;
console.log(multiply(4, 2));


//                                   SCOPS
// we have some scope in javascript
// global scop, function scope, block scop, lexical scope

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

//      Lexical Scope 
// Lexical Scope definewhere a variable is accessible based on where it was declared in the source code.
// in simple term
// Functions and blocks can access variables defined in their outer scope.
// Variables declared inside a function are not accessible outside of it.
// JavaScript uselexical scoping, meanina function remembers where it was written and can access variables from that place.
let country = "India";  // Global Scope

function state() {
    let city = "Mumbai";  // Local Scope
    console.log(country);  // Accessible (Outer Scope)

    function area() {
        let street = "Marine Drive";  // Block Scope
        console.log(city);  //  Accessible (Parent Scope)
        console.log(country);  //  Accessible (Global Scope)
    }

    area();
    console.log(street);  //  Error: street is not defined (inner scope)
}

state();
console.log(city);  //  Error: city is not defined (Function Scope)

// country is acessible everywhere and city is only acesses in local scope it means only state is acess
// and street only acess in block scope and not acess  everyweher but can be accesible variable of parent 
// function.

//                   How the Scope Chain Works

// 1. JavaScript first looks for the variable in the local function scope.
// 2. If not found, it moves to the parent function’s scope.
// 3. If still not found, it checks the global scope.
// 4. If the variable doesn’t exist anywhere, it throws an error.

let globalVar = "Global";

function firstLevel() {
    let firstVar = "First Level";

    function secondLevel() {
        let secondVar = "Second Level";

        console.log(globalVar);  //  Found in Global Scope
        console.log(firstVar);  //  Found in Parent Scope
        console.log(secondVar);  //  Found in Local Scope
    }

    secondLevel();
    console.log(secondVar);  //  Error: secondVar is not defined (Inner Scope)
}

firstLevel();
console.log(firstVar);  //  Error: firstVar is not defined (Function Scope)



///                                   BEST PRACTICE TO AVOID SOPE ISSUES
// Always use let and const instead of var to avoid scope leakage.
// Declare variables at the beginning of their scope to avoid hoisting issues.
// Use strict mode ("use strict";) to catch undeclared global variables.
// Use strict mode ("use strict";) to catch undeclared global variables.