// MAP method 

// map()
//   - This method creates a new array with the results of calling a provided
//     function on every element in this array 
//   - Great if you want to mutate every element of the array. 
//   - The new array will be the exact same length as the original array
//   - It applies a given transformation that was specified in the call back function
//     to every single element in the array. 

const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

// This changes all values of isRecordTemp to true 
const newTemps = temperatures.map(temperature => {
  temperature.isRecordTemp = true;
  return temperature;
});

console.log(newTemps);



// ================================================================



// You can also add new elements to an array. Below we add 'isHigh' as a new key. 


const temperatures2 = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

const newTemps2 = temperatures2.map(temperature => {
  temperature.isHigh = true;
  return temperature
})

console.log(newTemps2);



// If you want to add a new element, only based on a condition.... 

const temperatures3 = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

const newTemps3 = temperatures3.map(temperature => 
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
);

console.log(newTemps3);