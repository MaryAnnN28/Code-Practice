// The .every() method

// - This method checks EVERY element in the array that passes the condition, 
//   returning true or false as appropriate. 


const temperatures = [
  { degrees: 69, isRecordTemp: false }, 
  { degrees: 82, isRecordTemp: true }, 
  { degrees: 73, isRecordTemp: false }, 
  { degrees: 64, isRecordTemp: false }
];

const result = temperatures.every(temperature => !temperature.isRecordTemp); // true / false
console.log(result);