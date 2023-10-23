/* ************* Comparison **************** */

// console.log(2 > 1); // true
// console.log(2 >= 1); //true
// console.log(2 < 1);  //false
// console.log(2 == 1);  //false
// console.log(2 != 1); // true
//=======================================

// console.log("2" > 1);    // true
// console.clog("02" > 1);   //true
 // make sure you are comparing two same data type

//  console.log(null > 0); //false
//  console.log(null == 0); //false
//  console.log(null >= 0); //true  => Confusion  => the reason is that an equality check == and comparison >,<,>=,<= work differently.
                                  //Comparison converts null to number, treating it as 0. that's ehy null>=0 is true and null>0 is false.
//=================================================

// console.log(undefined == 0); // => Comparison and equality check is two different thing
// console.log(undefined <= 0);
// console.log(undefined >= 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
/**
false
false
false
false
false
 */
// Avoid these kind of code : try to write clean code.

// strict check: ===
