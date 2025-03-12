//                         Types Of Loop 

// Different types of loops exist to handle various use cases efficiently.
// 1 :- for Loop (Count-Controlled Loop)
// 2 :- while Loop (Condition-Controlled Loop)
// 3 :- do-while Loop (Runs At Least Once After chek condition)
// 4 :- for-in Loop (Used for Objects)

// 1 :- for Loop (Count-Controlled Loop)& (Fixed Repeatati) :-
//        A `for` loop is used when you know exactly how many times you need to repeat a task. 
// 1:- Initialization: Set a starting value.
// 2:- Condition: Define when the loop should stop.
// 3:- Update: Increase or decrease the counter each iteration.
let nums=5;
for(let i=1;i<=nums;i++){// print of output is 1,2,3,4,5.
    console.log(i);
}

// 2 :- while Loop (Condition-Controlled Loop):- 
//  while loop continues running as long as a given condition remains true. 
//  It’s useful when the number of iterations is unknown at the start.
let count = 5;

while (count < 10) {// output is 5,6,7,8,9.
    console.log(" Rupees is ", count);
    count++;
}

// Real world Scenorios.

let attempts=3
let correctPassword = "secure123";
let userInput = "";

while (attempts > 0 && userInput !== correctPassword) {
    userInput = prompt("Enter password:");
    attempts--;

    if (userInput === correctPassword) {
        console.log("Login successful!");
    } else {
        console.log("Incorrect password. Attempts left:", attempts);
    }
}
if (attempts === 0 && userInput !== correctPassword) {
    console.log("Account locked. Please reset your password.");
}

// 3 :- do-while Loop (Runs At Least Once After chek condition) :-
//      do...while loop executes the code at least once and after check condition .
//      even if the condition is false.let age;
let age;
do {
    age = prompt("Enter your age:");
} while (isNaN(age) || age <= 0);

console.log("Valid age entered:", age);


//4. for-in Loop (Used for Objects)
//  Best for: Iterating over object properties.
let user = { name: "Alice", age: 25, city: "New York" };

for (let key in user) {// only for use object you can use array but javascript is not recommonded
    console.log(key + ": " + user[key]);// out put is name:"alice,age: 25,city : newyork
}


// Loops are a **core concept in JavaScript**, helping you:

// 1. Automate repetitive tasks efficiently.
// 2. Process large datasets dynamically.
// 3. Improve code readability and maintainability.