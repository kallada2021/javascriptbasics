function foo() {
    let i;
    for (i=0; i<5; i++) {
        console.log(i);
    }
    console.log(i);
}
foo()

// Arithmetic Operators
console.log("***Arithmetic Operators***")
console.log("2+3=" + (2 + 3));
console.log("2-3=" + (2 - 3));
console.log("2*3=" + (2*3));
console.log("6 / 3 = " + (6 / 3));
console.log("7 / 3 = " + (7 / 3));

//Assignment Operators
console.log("\n***Assignment operators***")
var x = 3;
console.log("x=" +x);
console.log("x += 1 gives x = " +(x+=1));
console.log("x -= 1 gives x = " +(x-=1));
console.log("x *= 3 gives x = " +(x*=3));
console.log("x /= 3 gives x = " +(x/=3));

//Logical Operators
console.log("\n****Logical Operators****");
console.log("1 OR 1 =" + (1 || 1));
console.log("1 OR 0 =" + (1 || 0));
console.log("1 AND 1 =" + (1 && 1));
console.log("1 AND 1 =" + (1 && 0));

var age = 10
let isValid = (age >= 10) && (age <=65);
console.log(isValid);

//Comma Operator
console.log("\n****Comma Operator****");
var a = 4;
b = ++a
console.log(b);
a = (++a,a)
console.log("The value for expression with comma operator is: " + a);

//Comparison Operator
console.log("\n****Comparison Operators****");
console.log(1>2);
console.log(1<2);
console.log(1==1);
console.log(1 != 1);

//Bitwise Operator
console.log("\n****Bitwise Operators****")
console.log("Bitwise AND of 5 and 1: " + (5 & 1));
console.log("Bitwise AND of 5 OR 1: " + (5 | 1));
console.log("Bitwise XOR of 5 and 1: " + (5 ^ 1));

//String operator
console.log("\n****String Operator****")
console.log("Concatenation"  + "operator in action.");
console.log("Concatenation" + "(+)" + "operator in action.");

//Conditional Operator
console.log("\n ****Conditional Operator****")
var num_of_months = 13
var ans = (num_of_months > 12) ? "True" : "False"
console.log(ans);

//Unary Operator

console.log(typeof(1));
console.log('1' == 1);
console.log('1' === 1);