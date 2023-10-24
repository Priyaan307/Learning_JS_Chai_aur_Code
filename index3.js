// conversion and operations

// Case-1:

// let score = "33ab";
// console.log(typeof score);  //string
// console.log(typeof(score)); // string

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);         //number
// console.log(valueInNumber);    // NAN : not a number

/*
Output :
string
string
number
NaN
============================================
*/

// case-2 :

// let score = null;
// console.log(typeof score);  
// console.log(typeof(score)); 

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);        
// console.log(valueInNumber);

/*
 output:
object
object
number
0
==========================================
*/

// case-3 :
// let score;
// console.log(typeof score);  
// console.log(typeof(score)); 

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);        
// console.log(valueInNumber);

/*

undefined
undefined
number
NaN
===============================================
*/ 

//Notes: 
// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0
 // ============================================
// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  
 
// output : true
 //=====================================

// let isLoggedIn;
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); 

// output : false
// ========================================

// let isLoggedIn = "priya";
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// output : true

// 1 => true; "" => false; "Riya" => true
//============================================

// let someNumber = 44;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// Output:
// 44
//string 

/* ************************* Operations ********************** */

// let value = 3;
// let negValue = -value;
// console.log(negValue); 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(7%6);
// console.log(2**3);

//============================================

// let str1 ="Priya";

// let str2 =" darshani";
// let str3 = str1 + str2;
// console.log(str3);
// console.log("1 " +  2); // 1 2
// console.log(1 + " priya");   // 1 priya
// console.log(2 + "1");      // 21
// console.log("1" + 2 + 2);  // 122 => if 1st is string next everything will be converted into string

// console.log(1 + 2 + "2"); // 32 =>operation will be applied on numbers before string. 

// console.log(1 + 2 + "a"); // 3a

// console.log((3+4)*5 % 3); // 2

//======================================

// console.log(true);   //true
// console.log(+true); // 1
//console.log(true+);  // error
//console.log(true-); // error
// console.log(-true); // -1
// console.log(+""); // 0

//========================================

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num1); //4
// console.log(num2); //4
// console.log(num3);  //4

//======================================
 
// Case -1: 
// let gameCounter = 100
// gameCounter++;   // 101
// console.log(gameCounter);

//case2====================
// let gameCounter = 100
// ++gameCounter;  //101

// console.log(gameCounter);

// link  to study : read about prefix and post from mdn 

// DataTypes : 7 :
// null undefined boolean number bigint string symbol 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123")
const anotherId = Symbol('123');4
console.log( id === anotherId);

const bigNumber = 3445678903345573232020n




// Reference data types ( Non-primitive) => object, Array, Functions


const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
     name: "Priya",
     age: 22,
}

const myFunction = function(){
    console.log("hello!");
}
console.log(typeof(myFunction)); //function

/* JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.*/
