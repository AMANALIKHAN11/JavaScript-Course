//  Chossing the Loop in JavaScript 
// for loop
// while loop
// do-while loop
// map
// filter
// reduce

// for loop
// for Loop – Best When You Know the Number of Iterations
// The for loop is ideal when you need to execute a block of code a fixed number of times.

let  number=50;
for(let i=41;i<=50;i++){
    console.log(i)   
}// 41,42,43,44,45,46,47,48,49,50

// while loop
let nums=10;
while(nums>0 && nums<21){
    console.log(nums);
    nums++;
}// 10,11,12,13,14,15,16,17,18,19,20

// do-while
let s=5;
do{
    console.log(s);
      s--
}while(s>=0);//5,4,3,2,1,0

//                           Map ()
// map is used for best  transforming arrays without modifying & logic original data  it is create
// new arrays by applying map() function to each element
// it is automatically taken a peramettr by map() during itration.
let loss=[10,20,30,40];
let loosPrice=10;
let netLoss=loss.map(l=>l-loosPrice);
console.log(netLoss);//[0,10,20,30];

// EXAMPLE -2
let id=["23csa" ,"23csa ","46sa ", "25bc"];
let price="3bc105"
let enrollNo=id.map(add=>add+price);// This is student id [23sca3bc105, 23csa105, 46sa3bc105,25bs3bc105];
console.log("This is Student ID",id)
//                          Filter()
// filter is used for best selecting specific element in an arrays
// When working with search, filtering, or removing unwanted elements.
// When you want to keep the original array unchanged.
let natrulNumber=[1,2,3,4,5];
let oddNumber=natrulNumber.filter(index=>index%2===1);
console.log("this is odd no.",oddNumber)// [1 ,3 ,5];

// example 2

let attackNO=[1,2,3,4,5,6]
let target=5;
let search=attackNO.filter(index=>index===target);
console.log(search, " target is done");



//                            Reduce ()
// reduce is used for calculating a single value from an array 
// it is transforming an array into a single result
// and it is used to to sum values, find an average, or merge data.
 let sub=[10,20,30,10];
 let valu=sub.reduce((sub,no)=> no-sub);
 console.log(valu)//  value -10

 // example 2
 let no=[1,2,3,4,5]
 let factorialNo=no.reduce((f,no)=>f*1*no);
 console.log(factorialNo)// 120


 // . Choosing the Right Loop – Best Practices

 //Use for when you need an index or a fixed number of iteratio 
//  Use while when you don’t know how many times the loop will r 
//  Use do...while when at least one execution is needed before checking conditio 
//  Use map() when transforming an array into a new arr 
//  Use filter() when selecting elements from an array based on a conditi 
// Use reduce() when aggregating an array into a single val 



