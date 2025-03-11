                                    // Variable Of JavaScript And  How to work 

// VARAIABLE :- Variable is a container which use to store the Data.
// we have a Three type of Variable in JavaScript :-
//                                                     1 :-     var :-
                                                                       var name="javascript";// var can be Redeclare and it function scope & Old variable
                                                                        console.log(name);//for the print on trminal

//                                                     2 :-    let :-
                                                                         let number=786; // let cannot Redeclare but can be reassignment and it is Block Scope
                                                                         console.log(number);

//                                                      3 :-   const :-  
                                                                        const userId="23csa3bc105"; // const cannot be Redeclar and Reassignment we can say it is final variable and it is Block SCOPE
                                                                        console.log(userId)
/* Variable Decleration */ let n; var id; 
/* Variable Initilization*/ n=25; id=10;    // const ko initilize tb hi kra  ja skta h tb use declare kr rhe ho

                                        //  Variable are How to work in JS.
// we can say  Variable work in Three way
// (1) Memmory Allocation
// (2) Execution Scope
// (3) Variable Hosting 

//(1) Memmory Allocation :- we have two type of memeory Allocation in javascript  1:- 
//                                                                                      Stack Memmory :- Stack memeory only store primitive data (int,float,char,biilean,string)
//                                                                                2:-   Heap  Memmory :- Heap Memmory only store Non Primitive Data (Object,Function,Arrays);

//(2) Execution :- we have Three types of varaiable execution in JS 1 :-
//                                                                       Global Variable  this is everywhere use and accessible 
//                                                                  2 :- Local varable  this is use and accessible only block 
//                                                                  3 :- Function varible this is use and accessible only function 
 function number(){
    var aofNumber=20;   
    if(aofNumber==10){
        let bofNumber=10;
        const cofNumber=30;
    

    }
    
    console.log(aofNumber); // 20 print ho jayega
    console.log(bofNumber);// yha error hoga     because let and const only declare in block so that is block varaiable 
    console.log(cofNumber);// yha bhi  error hoga 
 }

 //                             Variable Hosting 
 // Variable Hosting Means we are Acesses variable and function befor the execution on javascript platform
 var aman;        // Declaration 
console.log(aman); // undefined hoga kyuki valu assign nahi hui
aman = 10;       // Initialization 
console.log(aman); // 10 
let number; 
console.log(number); // yha error aayegi kyuki uninitilized h or TDZ m rhete h 
   


//               How JavaScript Stores Variables in Memmory
// javascript store variable in two memmory :-
//                                            Stack memmory, Heap memmory

//Stack Memmor => it is storre premitive data such as(number,string,boolean,char,string);and varaiable are copy when the new variable assign 
let nums1=4;
let nums2=nums1;// copy vaue wthout reeffrence.
nums2=10;
console.log(nums1);//output is  4 
console.log(nums2);// output is 10;

//         How work Garbage Collection in Javscript
//javascript Engine  is use garbage collection alghorithum which is use to manage memmory.
function createUser() {
    let user = { name: "Sunil" }; // Memory allocated for object
    return user;
}

let newUser = createUser(); // 'user' is still accessible
newUser = null; // Now 'user' is unreachable and will be garbage collected

