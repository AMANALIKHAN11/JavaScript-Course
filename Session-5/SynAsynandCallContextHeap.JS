//    Synchronous vs. Asynchronous Execution

// Synchronous Execution (Step by Step Execution)
// By default, JavaScript is synchronous, meaning it executes one task at a time in a sequential manner
// we can say it is single thread .step by step execution .
let multipleNumber=20*2;
console.log("this is multiplyzation");// first task
console.log(multipleNumber)//40 second task.

// Asynchronous Execution
//In real world applications, some taskstake time to complete, such as:

//  Fetching data from a server
//  Reading a file
//  Delaying execution (e.g., `setTimeout()`)

// When JavaScript encounters such tasks, itdoes not wait. Instead, itcontinues executing the next lines of code and
//  handles the delayed tasklater.
console.log("Start");// first excute 

setTimeout(() => {
    console.log("Fetching user data...");  // Delayed task// last exexute
}, 2000); // 2-second delay

console.log("End");//second execute

//How JavaScript Processes Each Line of Code

// When JavaScript executes code, it followsa strict order controlled by two key components:

// 1.Execution Context  Decides how the code runs.
// 2.Call Stack  Keeps track of function execution.

// Execution Context The Heart of JavaScript Execution.

// An Execution Context (EC) is the environment in which JavaScript code runs.

// Every time JavaScript executes a script or function, a new execution context is created.

//  Types of Execution Contexts

// 1. Global Execution Context (GEC):
//       Created when a JavaScript file starts executing.
//       Contains global variables and functions.
//       There is only one Global Execution Context at any time.
// 2. Function Execution Context (FEC):
//       Created whenever a function is called.
//       Each function gets its execution context.
//       Once the function finishes execution, its context is removed from memory.

//  2.Call Stack  Keeps track of function execution
// ThCall Stack is data structure that JavaScript uses tkeep track of function calls.

// When a function is called, it is pushed onto the Call Stack.
// When a function completes, it is removed from the Call Stack.
// JavaScript always executes the function on top of the stack first.
//This is exactly how JavaScript’s Call Stack works. The last function must be completed before returning to the previous function
function first() {
    console.log("First function started");
    second();
    console.log("First function ended");
}

function second() {
    console.log("Second function started");
    third();                                      // First function started
    console.log("Second function ended");         // Second function started
                                                  // Third function started and ended
                                                  // Second function ended
                                                  // First function ended
}   


function third() {
    console.log("Third function started and ended");
}

first();// call fisrts after then second call after third call 

// Execution Breakdown (Step-by-Step)

// 1. `first()` is called → It is pushed onto the Call Stack.
// 2. `first()` calls `second()` → `second()` is added to the Call Stack.
// 3. `second()` calls `third()` → `third()` is added to the Call Stack.
// 4. `third()` completes execution → Removed from the Call Stack.
// 5. `second()` completes execution → Removed from the Call Stack.
// 6. `first()` completes execution → Removed from the Call Stack.


//Memory Heap Where JavaScript Stores Data
// The Memory Heap is where JavaScript stores variables, objects, and functions.

// When we create variables or objects, JavaScript allocates memory in the Memory Heap.
// When objects are no longer needed, JavaScript’s Garbage Collector automatically removes them.
let name = "Amit";  // Stored in the Memory Heap
let user = { name: "Amit", city: "Mumbai" };  // Object stored in the Heap

function greet() {
    let message = "Hello " + user.name;  // Temporary memory allocation
    console.log(message);
}

greet();  // Memory is allocated and released when the function ends

// Simple values (numbers, strings) are stored directly.
// Objects and arrays are stored in the Memory Heap.
// Memory is freed when variables are no longer needed.

// How Call Stack and Memory Heap Work Together

function createUser(name, city) {
    return { name, city };
}

function displayUser() {
    let user = createUser("Priya", "Pune");  // Memory allocation
    console.log(`User: ${user.name} from ${user.city}`);
}

displayUser();
// when  we call  display(); that is store callstack on the top  and heap memmor is empty
// at this point  after that is call createuser() ande allocate a  new object in heap and after
// user is object is store in heap and compelete the createuser () and it is remove calstack
// and after execute display() and acsess user to heap and print them.