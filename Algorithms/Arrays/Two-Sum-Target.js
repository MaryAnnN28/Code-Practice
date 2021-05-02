// TWO SUM

// Given an array of integers (nums) and an integer (target), return indices 
// of the two numbers such that they add up to (target)

// Example: Input: nums = [2, 7, 11, 15], target = 9
      // Output: [0, 1] bc nums[0] + nums[1] == 9 (2+7 = 9)


var twoSum = function (nums, target) {
  for (let a = 0; a <= nums.length; a++) {
    for (let b = a + 1; b <= nums.length; b++) {
      if (nums[a] + nums[b] == target) {
        return [a, b]
      }
    }
  }
};

