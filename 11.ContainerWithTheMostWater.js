/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaBruteForce = function (height) {
  let maxArea = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = 0; j < height.length; j++) {
      const currentArea = Math.min(height[i], height[j]) * (j - i);
      maxArea = Math.max(maxArea, currentArea);
    }
  }
  return maxArea;
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxAreaBruteForce(height));
console.log(maxAreaBruteForce([1, 1]));

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;
  while (i < j) {
    const currentArea = Math.min(height[i], height[j]) * (j - i);
    maxArea = Math.max(maxArea, currentArea);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};
console.log(maxArea(height));
console.log(maxArea([1, 1]));
