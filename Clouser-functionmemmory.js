function outer() {
    let city = "Jaipur";

    function inner() {
        console.log("Welcome to", city);
    }
    inner();
    
}

outer(); // Output: Welcome to Jaipur
