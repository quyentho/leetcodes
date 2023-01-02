var maxSubArrayBruteForce = function (nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];

    max = Math.max(max, sum);
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(max, sum);
    }
  }

  return max;
};

var maxSubArrayOptimized = (nums) => {
  let maxSum = 0;
  let length = nums.length;

  if (length > 0) {
    let sum = (maxSum = nums[0]);

    for (let i = 1; i < length; i++) {
      // the window gonna expand until the sum is lower than 0
      // why 0?
      // because: Max(negative number + any number , 0 + any number) = 0 + any number
      if (sum > 0) {
        sum += nums[i];
      } else {
        // then it gonna reset (slide to new position)
        sum = nums[i];
      }

      // keep track of maximum number
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
};
console.log(maxSubArrayBruteForce([5, 4, -1, 7, 8]));
console.log(maxSubArrayOptimized([-1, -2]));
console.log(maxSubArrayOptimized([5, -3, -2, 7, 8]));
console.log(maxSubArrayOptimized([-2, -1]));
console.log(maxSubArrayBruteForce([4, -1, 2, 1, -2, 1, -3, -5, 4]));
