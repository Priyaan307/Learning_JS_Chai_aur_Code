
// console.log("Priya");

// let vs var

const accountId = 12345;
let accountEmail = "priyarrsdce@gmail.com";
var accountPassword = "1234";
accountCity = "Begusarai";
let accountState; //Undefined

//accountId = 2; => Can't modify the value of const

accountEmail = "hc@hc.com";
accountPassword = "12234567";
accountCity = "Bihar";

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

/*
 output:

 (index)  │   Values    │
├─────────┼─────────────┤
│    0    │ 'hc@hc.com' │
│    1    │    12345    │
│    2    │ '12234567'  │
│    3    │   'Bihar'   │
│    4    │  undefined  │
*/
// why use let : Scope 

/* Prefer not to use var : Problem in functional scope*/

