// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

//Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

/**
 *
 * @param {number[]} nums
 * @param {number} targetLength
 */
function maxSubarraySum(nums, targetLength) {
  let maxSum = 0;
  if (nums.length < targetLength) return null;
  // initialize window sum value
  for (let i = 0; i < targetLength; i++) {
    maxSum += nums[i];
  }
  let currentSum = maxSum;
  let windowStart = 1;
  let windowEnd = targetLength;

  while (windowEnd < nums.length) {
    currentSum += nums[windowEnd] - nums[windowStart - 1];
    maxSum = Math.max(maxSum, currentSum);
    ++windowStart;
    ++windowEnd;
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
