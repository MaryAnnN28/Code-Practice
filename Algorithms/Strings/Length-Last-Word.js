// LENGTH OF LAST WORD 

/* PROBLEM: Given a string 's' consists of some words separated by spaces, 
return the length of the last word in the string. 
If the last word does not exist, return 0. 
*/

const lengthOfLastWord = function(str) {
  const words = str.trim().split(' ')
  return words.length > 0 ? words[words.length - 1].length : 0
};

// Sample Input: "Hello World"
// Output: 5
// Expected: 5
// CODE ABOVE WORKS 