// First Create 5 basic functions for calculator
function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return b!==0 ? a/b : "denominator is zero";
}
function modulus(a,b){ //check for remainder
    return a%b;
}
// Now we will make HOF for 3 operations only
function calculatorThree(fun,a,b){
    if(fun==="add"){
        return add(a,b);
    }
    else if(fun==="substract"){
        return substract(a,b);
    }
    else if(fun==="divide"){
        return divide(a,b);
    }
    else{
        return "Invalid Operation";
    }
}
// Now we will make HOF for all 5 operations
function calculatorAll(fun,a,b){
    const opr={
        add: add,
        substract: substract,
        multiply: multiply,
        divide: divide,
        modulus:modulus
    };
    const operation=opr[fun];
    return operation ? operation(a,b):"Invalid Operation";
}
// passing Arguments
console.log(calculatorThree("add", 89, 42));       
console.log(calculatorThree("divide", 105, 2));   
console.log(calculatorAll("modulus", 982, 4));   
console.log(calculatorAll("power", 28, 3));    
