// forEach method 

// forEach()
//   - Allos us to perform operations on every single element of an array 
//   - forEach() doesn't create a new array like map
//   - Great if you want to mutate every element of the original array 
//   - It just iterates over the array we give it, and perform an operation given a call back. 



const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];

const newTemps = temperatures.map(temperature => 
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
);
  
newTemps.forEach(temperature => {
  if (temperature.isHigh) {
    console.log(`Temperature ${temperature.degrees} was a record high last week!`)
  }
})
console.log(newTemps);


// We can also do method-chaining, by attaching the .forEach to the end of the map method like so...

//          temperatures.map(temperature => 
//           temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
//          ).forEach(temperature => {
//            if (temperature.isHigh) {
//              console.log(`Temperature ${temperature.degrees} was a record high last week!`)
//            }
//          })
     