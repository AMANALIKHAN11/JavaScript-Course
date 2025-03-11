// (1) How JavaScript decides whether "5" + 1 should be "51" or 6.
let str="5"
let nums=1
//(+) opration 
console.log(str+nums);//output is 51 because this is concatination . is not ding convert the data.
//2.How to avoid unexpected bugs caused by type coercion.
 //Avoid this 
 console.log(0 == false) // true this == only compare to value not value type
 console.log("123" == 123) //true
 // Always used this
 console.log(0 === false) //false this ===  compare both value and value type
 console.log("123" === 123) //false
 
 //3.Falsy vs. Truthy values – Understanding hidden conversion rules.
 
 console.log(false || "hello"); //  0 is falsy value and hello  is true then print  hello
 console.log( 1 && "hello2"); //both value is true but it will give you last true value
 
 
 // 1.Buggy Code
 
 let pricePerItem = "100"; 
 let quantity = 3;
 
 let totalPrice = pricePerItem * quantity;
 
 console.log(totalPrice);
 
 //Fixed that
 
 let pricePerItem1 = Number("100"); 
 let quantity1 = 3;
 
 let totalPrice1 = pricePerItem1 * quantity1;
 
 console.log(totalPrice1);
 
 
 
 //2.Buggy Code
 
 let isTrue="0";
 
 if(isTrue == false){
     console.log("This portion will be run");
 }else{
     console.log("This portion will not be run");
 }
 
 //Fixed that
 
 let isTrue1=false;
 
 if(isTrue1 === false){
     console.log("Used this === operator");
 }else{
     console.log("Dont used this == operator");
 }



let array=["1","9","5","2","10"].map(Number)// convert string to number.
array.sort((a, b) => a - b);//sorting
console.log(array);

// 1st time : Compare 1 and 9 → (1 - 9) = -8 → No change
// [1, 9, 5, 2, 10]
// 2nd pass: Compare 9 and 5 → (9 - 5) = 4 → change
// [1, 5, 9, 2, 10]
// 3rd pass: Compare 9 and 2 → (9 - 2) = 7 → change
// [1, 5, 2, 9, 10]
// 4th pass: Compare 9 and 10 → (9 - 10) = -1 → No change
// [1, 5, 2, 9, 10]
// 5th pass: Compare 5 and 2 → (5 - 2) = 3 → change
// [1, 2, 5, 9, 10]
// Final sorted array: [1, 2, 5, 9, 10]


