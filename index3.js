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