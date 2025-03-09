        // Why JavaScript sometimes converts a string into a number automatically.

// In the JavaScript have a Type Coercion(automatic type conversion) which is use to perform convert data
// we can have three type of convert data.
// (1) Convert a String into a Number.
// (2) Convert a Number into a String.
// (3) Convert a true into true && false into false.

// (1) Convert a String into Nuumber :-
                                        let erpNo="25";// Only  (-),(*),(/) this opretar is automatically  convert Strin into Number 
                                        console.log(erpNo-3);// output is 22
// (2) Convert a Number into String  :- 
                                        let enrollNo=23;//only  (+) Opretar is automatically convert number into string.
                                        console.log(enrollNo+"csa3bc105");// output is 23csa23bc105.

                                        if("Taniya"){
                                            console.log("Hi aman");// this is correct because if cndition run on tru condition and any not empty string is true.
                                        }
                                        if(0){
                                            console.log("BY Aman");// this is Incorrect because 0(False) and empty(" ") string is false in boolean.
                                        }