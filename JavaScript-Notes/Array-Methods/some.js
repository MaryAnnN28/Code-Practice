// Some Method  .some()

// - The .some() method tests whether at least ONE element in the array 
//   that passes the condition, return true or false as appropriate. 


const temperatures = [
  { degrees: 69, isRecordTemp: false }, 
  { degrees: 82, isRecordTemp: true }, 
  { degrees: 73, isRecordTemp: false }, 
  { degrees: 64, isRecordTemp: false }
];

const result = temperatures.some(temperature => temperature.isRecordTemp === true);
console.log(result);  // true 