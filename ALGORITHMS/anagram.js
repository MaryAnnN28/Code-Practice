// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// TIPS/NOTES 
// We first create a helper function (buildCharMap) below and passing in a string. 
// then we convert the string, taking out any spaces and special characters, 
// then making lowercase. We store this in a variable as an object. 

// Then in the primary function, we create a variable for each string (aCharMap & bCharMap)
// which we then call the helper function we created and pass into it each string 
// that we need to compare. 

// Then using the Object.keys method, we can take a look at just the keys of the object. 
// and check to see if the length of aCharMap does NOT equal length of keys for bCharMap, 
// then it must be false. 

// But then if it is the same length, we can move on to the next check point. 
// We only need to iterate through one of the strings, using a for...in loop. 
// For each char in aCharMap, if the char in aCharMap does not match char in bCharMap, it will break. 
// if it does not break through iteration, then it is an anagram. 

// SOLUTION #2 - BEST SOLUTION! 
function anagrams(stringA, stringB) {
  const cleanStrA = stringCleanup(stringA);
  const cleanStrB = stringCleanup(stringB);
  
  if (cleanStrA !== cleanStrB) {
    return false;
  } 
  return true; 
}
  
function stringCleanup(str) {
  return str.replace(/[\^w]/g, '').toLowerCase().split("").sort().join("")
}


module.exports = anagrams;


// SOLUTION #1
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA); 
//   const bCharMap = buildCharMap(stringB);
  
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false; 
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false; 
//     }
//   }
//   return true; 
// }

// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1; 
//   }
//   return charMap; 
// }