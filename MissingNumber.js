// https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let dict = {};
  for (const number of nums) {
    dict[number] = 1;
  }
  for (let index = 0; index <= nums.length; index++) {
    if (!dict[index]) return index;
  }

  return -1;
};

const nums = [0, 1];
console.log(missingNumber(nums));
