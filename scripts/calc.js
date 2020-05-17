Calculator = function() {
    this.value = 0; /*Initialazes the function*/
};

Calculator.prototype.add = function(number) { /*Takes one number as an argument*/
    if (typeof(number) == "number") { /*typeof checks if its actually a number*/
        this.value += number; /*adds this number value to the other added number value and returns it*/
    } else { /* If what is added is not two numbers then this is returned*/
        alert("Error!");
    }
};

/* OLD VERSION */
/*
function addition(numOne, numTwo) {
    if (typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne + numTwo;
    } else {
        alert("Error!"); /* the function beign called in calcSpec when theres an error
    }
}
*/