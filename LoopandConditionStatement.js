//                                // Loop Statemen

// // Loop is used to repetitive task efficently such as excuting opretion multipal time without writnig dupilicte code.
// //  In the Jvascript  loop structure is :- 
// //                                         Initilization, condition , execution , updation

//                               //Why Are Loops Important/
                             
// //     we can say if we want to perform any one taks thousand time  then we will used loops without 
// //     Loops this task will be entangled.then loop is important multipale case because a loop is 
// //     programming constructor  that allows to you to repeat block of code  multipale time.

//                               //How loops work behind the scenes

// //   Initialization → Start from a specific value.
// //   Condition Checking → Before each iteration check if the condition is true or false.
// //   Execution → If the condition is true execute the loop body.
// //   Increment & decreament /Update → Update the loop variable.
// //  Repeat or Exit → If the condition remains true repeat the process. If false, exit the loop.

  
//                               //Real-world scenarios where loops are neces

//     // without loops                        
    let nums1 = [100, 200, 150, 300, 250];
    let sum = nums1[0] + nums1[1] + nums1[2] + nums1[3] + nums1[4];
    console.log("Total nums1:", sum);  // 1000
    
// // With loops 
 let nums = [1, 2, 15, 3, 25];
 let total = 0;
 for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}

//   console.log("Total nums.:", total);


                               // condition statment & Control Flow

//Control flow is the core logic of any JavaScript program. It determines how code executes based on conditions. 

//How if, else, and switch statements work in JavaScrip
// if =>  if  only  execute on TRUE Condition.
//else if and else => allow multiple conditions to be checked.
let name="aman";
if(name==="aman"){
  console.log("Hii aman")
}
else if(name==="taniya"){
  console.log("by by Taniya");
}else{
  console.log("Welcome Gyus")
}                             // output is hii aman. 
//This ensures that only one condition is executed, making the code efficient and easy to read.
 
// Switch statement
// When checking multiple possible values of a single variable, a switch statement is often cleaner and 
// more efficient than using multiple if...else if statements.
let day = 4;

switch (day) {
    case 1:
        console.log("Start of the workweek.");
        break;
    case 2:
        console.log("Weekend is near!");
        break;
    case 3:
      console.log("one day left")
    case 4:
        console.log("It's the weekend!");
        break;
    default:
        console.log("Just another day.");
}
// A switch statement is more readable and structured when checking multiple values.
//  break ensures only the matching case executes improving efficiency.
// It is faster than multiple if...else if conditions in certain cases.


//1 Make decisions dynamically based on conditions.
//2 Optimize performance by structuring conditions efficiently.
//3 Write maintainable and scalable code that adapts to different situations.
