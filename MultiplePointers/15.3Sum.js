// https://leetcode.com/problems/3sum/
// write a function to to find sum of 3 unique values in a array so that the sum = 0
// the array is unordered
// there would be multiple combination of 3 values
// combination of 3 values cannot be repeated: eg: [-1,0,1] and [0,1,-1] is duplicated
// return [] if no result

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // sort the array
  // if array.length < 3 => no result
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);
  // if the array starts with value > 0 => no ways to sum to 0
  if (nums[0] > 0) return [];
  // loop through the sorted array:

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // declare two pointers: low = i + 1, high = arr.length - 1
    let low = i + 1;
    let high = nums.length - 1;
    // if arr[i] > 0: break => no way for sum = 0.
    if (nums[i] > 0) break;

    // if arr[i] === arr[i-1]: continue.
    // => we only check the first one if value is duplicated
    if (nums[i] === nums[i - 1]) continue;

    // start checking from i position
    // there maybe multiple combinations with i
    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];

      // if arr[i] + arr[low] + arr[high] < 0 => high--
      // if arr[i] + arr[low] + arr[high] > 0 => low++
      // else: result = at position [i,low,high]
      if (sum > 0) high--;
      else if (sum < 0) low++;
      else {
        result.push([nums[i], nums[low], nums[high]]);

        // update low and hight to last occurrence of values in case of duplicate
        // eg: [-2,-1,-1,0,0,1,1,2]
        // => result = arr[2] (i) + arr[3] (low) + arr[6] (high) = [-1,0,1]
        // need to update low = 4, high = 5
        // otherwise we will get duplicated combination:
        // arr[2] + arr[4] + arr[5] = [-1,0,1]
        let prevLowValue = nums[low];
        while (low < high && nums[low] === prevLowValue) low++;

        let prevHighValue = nums[high];
        while (low < high && prevHighValue === nums[high]) high--;
      }
    }
  }
  return result;
};

//[-2, -1, -1, 0, 0, 1, 1, 2]
// [0,  1,  2, 3, 4, 5, 6, 7];
console.log(threeSum([-2, -1, -1, 0, 0, 1, 1, 2]));
console.log(threeSum([-2, -1]));
console.log(threeSum([]));
console.log(threeSum([-2, -1, 0]));
console.log(threeSum([1, -1, -1, 0]));
