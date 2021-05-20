// LENGTH OF LAST WORD 

/* PROBLEM: Given a string 'str' that consists of some words separated by spaces, 
return length of last word in string. If last word does not exist, return 0. */

const lengthOfLastWord = function(str) {
  const words = str.trim().split(' ')
  return words.length > 0 ? words[words.length - 1].length : 0
};



// Sample Input: "Hello World"
// Output: 5
// Expected: 5