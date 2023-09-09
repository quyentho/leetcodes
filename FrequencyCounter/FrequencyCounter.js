// Given two positive integers, find out if the two numbers have the same frequency of digits
// Your solution MUST have the following complexities
// Time: O(N)

/**
 *
 * @param {number} num1
 * @param {number} num2
 */
function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  const dic1 = {};
  const dic2 = {};
  for (const char of str1) {
    dic1[char] = ++dic1[char] || 0;
  }

  for (const char of str2) {
    dic2[char] = ++dic2[char] || 0;
  }

  for (const key in dic1) {
    if (!(key in dic2)) {
      return false;
    }

    if (dic2[key] !== dic1[key]) {
      return false;
    }
  }

  for (const key in dic2) {
    if (!(key in dic1)) {
      return false;
    }

    if (dic1[key] !== dic2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
