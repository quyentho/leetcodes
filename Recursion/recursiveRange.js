//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

/**
 *
 * @param {number} num
 */
function recursiveRange(num) {
  if (num === 0) return num;
  return num + recursiveRange(--num);
}
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
