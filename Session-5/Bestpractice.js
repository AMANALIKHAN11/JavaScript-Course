  //   Blocking and Non-Blocking Code.

  console.log("Start");

for (let i = 0; i < 5_000_000_000; i++) { } // BLOCKING CODE .

console.log("End")

console.log("Start");

setTimeout(() => {
    console.log("Processing completed"); // NON-BLOCKING CODE 
}, 2000);

console.log("End");

//   Understanding the Event Loop  - The Heart of JavaScript’s Non-Blocking Nature
//    Non-Blocking (Efficient Service) 

// Promise , Map, Filter, Reduce and all best practice of code in this file
//promis 

console.log("X");
let Promise1=new Promise((resolve, reject) => {// OUTPUT X, Z,Y,W
    console.log("Z");
    resolve("W");
})
Promise1.catch((value)=>console.log(value));
console.log("Y")

// MAP
 let number=[1,2,3,4,5];
 let multiply=number.map(n => n*n);
 console.log(multiply);//[1,4,9,25];

