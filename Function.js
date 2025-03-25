// A function is like a machine that takes input processes it and gives an output.
// Think of a coffee machine you put in coffee beans and water (input)
// the machine brews it (processing), and you get coffee (output).

// we can say function is block of instruction.

// The Purpuse of function is
// writte clear and module code for easily read
// hidely complexity and expose main matters
// handle dynamic and real time behaviour

// Javascript written a function in two way 
// 1:- Predifine function
// 2:- User Define function

// 1:- Predifine function
// javascript provid a built in method for a comman task like as
// use for time saving and no requiired write the code ,for optimization.
 let nameStudent="aman";
 console.log(nameStudent.toLowerCase(),nameStudent.toUpperCase());// to.uppercase & tolowercase// aman ,AMAN
 // array.push()// add element in the array automatic 
 // Math.max,min,random() like perform different task 

 // 2:- User define function
 // you can creat a function and you own userdefine function based on your needs as like
 // reuse logic and based on need to changes behhavior
function Square(a){
       return a*a;

}
console.log(Square(5));// 25
console.log(Square(2));// 4

//                               Types Of Function 

// 1:- Function Declaretion (Traditinol Function)
// 2:- Function Expression 
// 3:- Arrow Function       ( arrow functions are a special type of function expression. )
// 4:- Immediately Invoked Function Expression (IIFE)
// 5:- CallBack Function
// 6:- Higher-Order Function
// 7:- Generator Function 
// 8:- Constructor Function


// 1 :- Function Declaretion 

// A function declaration is a way to define a function using the function keyword.
//  It is hoisted it can be called before it is defined.
//        1:-  basic function declaretion
function HII(){
       console.log("Hii Aman");
}
HII();// Hii Aman

//        2:- Function Declaration Called Before Definition (Hoisting)

HII();// Hii Aman hoisting 
function HII(){
       console.log("Hii Aman");
}

//     3: Function with Parameters & Defualt Perameters
function HII(age1,age2){
       
       return age1 > age2; // return a value and result 
}
console.log(HII(20,19));// true 
 HII();
       // Default Perameter.
function HII(name="aman"){
       console.log(name);
}
HII();// aman output Default perametre follow .
HII("taniya")


//           Nested Function
function outerFunction(){ 
    function innerFunction() {
       console.log("Inner function called!");
    }
   innerFunction();

}
outerFunction(); // Output: Inner function called

// 2:- FunctionExpression:
// A function expression is a way to define a function inside an expression
//   and assign it to a variable.
//Function expressions are NOT hoisted, meaning they must be defined before calling them.

const greet=function(name1){
       return` hello ${name1} !`;
}
console.log(greet("taniya"));

//                             Types of Function Expression
// 1:- Anonymous Function Expression
// 2:- Named Function Expression
// 3:- Immediately Invoked Function Expression 

// 1:- Anonymous Function Exression :
const greet1 = function(studen) {  //An anonymous function has no name and is assigned to a variable.
       return `Hello, ${studen}!`;
   };
   
   console.log(greet1("Aman")); // Output: Hello, Aman!

      // 2:- Named Function Expression
      const factorial = function fact(n) { //A named function expression has a function name, which can be useful for debugging. 
       if (n === 0){
              return 1;
       } 
       return n * fact(n - 1); // Using function name for recursion
   };
   
   console.log(factorial(5)); // Output: 120
     
       // 3:-  Immediately Invoked Function Expression
                       // firstly execute after being defiend.
                       (function (){
                            console.log("Good Morningn Taniya");
                       })();
   
   

//                                           CallBack Function
//  A callback function is a function that we give to another function as input. 
//  The main function runs first, and when it finishes, it calls the callback function.
// callback are use in asyncrounus code where take a time for execute/.
// A callback function is not executed immediately; it runs when the main function decides to call it.


function calculate(a, b, operation) {
       return operation(a, b);
   }
   
   function add(x, y) {
       return x + y;
   }
   
   function multiply(x, y) {
       return x * y;
   }
   
   console.log(calculate(5, 3, add));      // Output: 8  firstly this take argument of opretion function is a higer -order function
   //and after then it call add function which is take this argument and after take arument of multly and opretion(a,b) is working
   // there like as a placholder
   console.log(calculate(5, 3, multiply)); // Output: 15
   
   // Purpose
//    Better Code Organization – Makes functions reusable and modular.
//    Handles Asynchronous Tasks – Useful for tasks like fetching data, reading files, or timers.
//    Maintains Execution Order – Ensures one function runs after another.