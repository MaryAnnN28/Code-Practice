/* ***** Object.keys()
    - The Object.keys() method returns an array of a given object's own enumerable 
      property names, iterated in the same order that a normal loop would. 
    - It will return an array of strings that represent all the enumerable properties of the given object. 
*/

const object1 = {
  a: 'some string',
  b: 42,
  c: false 
}

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]



// =============================================================================
/* Object.values()
   - The Object.values() method returns an array of a given object's own enumerable
     property values, in the same order as that provided by a for...in loop. 
     The only difference is that a for...in loop enumerates properties in the 
     prototype chain as well. 
   - Note the difference is that only string values return as strings, and booleans and integers
     are returned in their normal state. 
*/

const object2 = {
  a: 'some string',
  b: 42,
  c: false 
}

console.log(Object.values(object2));
// expected output: Array ["some string", 42, false]


 // ************** EXAMPLE 2 FOR OBJECT.VALUES() *****************

const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95  
};

const totalExpenses = Object.values(monthlyExpenses); 

const total = totalExpenses.reduce((acc, num) => {
    return acc + num; 
}, 0);

console.log(totalExpenses); // ===> [400, 1700, 550, 49, 95]
console.log(total);         // ===> 2794



// =============================================================================
// =============================================================================

/* Object.entries()
    - The Object.entries() method returns an array of a given object's own enumerable
      string-keyed property  [key, value] pairs, in the same order as that provided
      by a for...in loop. 
    - The only important difference is that a for...in loop enumerates properties 
      in the prototype chain as well. 
    - The order of the array returned by Object.entries() does not depend on how an object
      is defined. If there is a need for certain ordering, then the array should be sorted
      first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));

*/

const object3 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object3)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed


// ==================== 2nd example ======================

const users = {
  '2345234': {
    name: "John",
    age: 29
  },
  '8798129': {
    name: "Jane",
    age: 42
  },
  '1092384': {
    name: "Fred",
    age: 17 
  }
};

const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
  if (user.age > 20) {
    acc.push({ ...user, id });
  }  
  return acc;
}, []);
console.log(usersOver20);
