/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const leftProduct = [1];
  const rightProduct = [];
  for (let index = 1; index < nums.length; index++) {
    leftProduct.push(leftProduct[index - 1] * nums[index - 1]);
  }
  // the right array is in reverse order
  for (let index = nums.length - 1; index >= 0; index--) {
    if (index === nums.length - 1) {
      rightProduct.push(1);
    } else {
      rightProduct.push(
        rightProduct[rightProduct.length - 1] * nums[index + 1]
      );
    }
  }

  const result = [];
  for (let index = 0; index < nums.length; index++) {
    result[index] =
      leftProduct[index] * rightProduct.at(rightProduct.length - index - 1);
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
