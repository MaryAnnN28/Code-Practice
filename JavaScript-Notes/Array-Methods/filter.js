// Filter Method

// .filter()
//   - Creates a new array with only elements that passes the condition inside the provided function
//   - Filter method is great for searching 
//   - If none of the elements match the condition we provide, we just get an empty array 



const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

//  .startsWith is a string method 
const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'))
console.log(results);


// Finds a restaurant that starts with the letter 'C', AND is less than 3 miles away 

const resultsLessThan2Miles = restaurants.filter(restaurant => restaurant.name.startsWith('C') && restaurant.milesAway < 3)
console.log(resultsLessThan2Miles);

// Finds a single restaurant that starts with 'C', AND less than 2 miles away 