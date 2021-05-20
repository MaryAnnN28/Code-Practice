// Given a sorted array nums, remove the duplicates in-place such that
// each element appears only once and returns the new length

var removeDuplicates = function (nums) {
  let i = 0;
  let x = 1;
  while (x < nums.length) {
    if (nums[x] === nums[i]) {
      x++
    } else {
      nums[++i] = nums[x];
    }
  }
  return i + 1;
};

// Given a sorted array nums, remove the duplicates in-place such that  
// duplicates appeared at most twice and return the new length.

var removeDuplicates = function(nums) {
  if (nums.length < 3) return nums.length;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i + 2]) {
      nums.splice(i + 2, 1);
      i--;
    }
  }
  return nums.length;
};