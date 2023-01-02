/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const dict = {};
  for (const value of nums) {
    if (dict[value]) {
      return true;
    } else {
      dict[value] = 1;
    }
  }
  return false;
};
