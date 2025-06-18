//Arithmetic Operator
let a=7;
let b=2;
let c="1";
console.log(a,"+",b,"=",a+b);
console.log(a,"-",b,"=",a-b);
console.log(a,"*",b,"=",a*b);
console.log(a,"/",b,"=",a/b);
console.log(a,"%",b,"=",a%b);
console.log(a,"**",b,"=",a**b);
console.log("a = ",a," & b = ",b);
//Unary Operator
a++;
b--;
console.log("a = ",a," & b = ",b);
//Assignment Operator
a+= 4;
console.log("a = ",a," & b = ",b);
//Comparison Operators
console.log("b==c ", b==c);// this will not check typeof variable
console.log("b!=c ", b!=c);// this will not check typeof variable
console.log("b===c ", b===c);//this will check type of variable
console.log("b!==c ", b!==c);//this will check type of variable
console.log("a>b = ", a>b);
console.log("a<b = ", a<b);
console.log("a>=b = ", a>=b);
console.log("a<=b = ", a<=b);
//Logical Operators
let num1=6;
let num2=5;
let cond1=num1>num2;
let cond2=num1===num2;
console.log("cond1 && cond2 = ", cond1&&cond2);
console.log("cond1 || cond2 = ", cond1||cond2);