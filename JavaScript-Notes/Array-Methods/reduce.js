// the .reduce() method

// - This method applies a function against an accumulator and each element 
//   in the array to reduce it to a single value 
// - It iterates over all of our array elements 
//    It needs a callback function, and the initial value. 






const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

const total = menuItems.reduce((accumulator, menuItem) => {
  // console.log(`
  // accumulator: ${accumulator}, 
  // menu item price: ${menuItem.price}
  // `)
  return accumulator + menuItem.price;
}, 0);

// console.log(total);



// USE REDUCE TO SUM THE WEIGHTS OF ONLY THE ELECTRIC CARS 

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];


const totalWeight = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight;
    } else {
        return accumulator;
    }
}, 0)

// console.log(totalWeight);


// =========================================================================

// USING REDUCE TO DOUBLE EACH NUMBER IN THE ARRAY 
//  To return a subset of the array (another array of same length), the accumulator will be empty [ ]


const numbers = [1, 2, 3, 4, 5, 6];

const doubleNums = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc; 
}, []);

// console.log('numbers', numbers);  // ===> numbers [1, 2, 3, 4, 5, 6 ]
// console.log('doubleNums', doubleNums); // ===> doubleNums [ 2, 4, 6, 8, 10, 12 ]




// =========================================================================

// USING REDUCE TO ONLY RETURN VALUES GREATER THAN 3 


const greaterNumbers = numbers.reduce((acc, num) => {
  if (num > 3) {
    acc.push(num);
  }  
  
  return acc;
}, []);
console.log(greaterNumbers);


// SHORTER TERNARY EQUIVALENT OF ABOVE, EXCEPT SWITCH OUT .push with .concat ....

const greaterNumbers2 = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);
console.log(greaterNumbers2);