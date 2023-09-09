/**
 *
 * @param {string} x
 * @param {string} y
 */
function solution(x, y) {
  if (x === y) return true;

  let xPointer = 0;
  let yPointer = 0;

  while (xPointer < x.length && yPointer < y.length) {
    if (x[xPointer] === y[yPointer]) {
      if (yPointer === y.length - 1) return true;
      ++yPointer;
      ++xPointer;
    } else {
      if (xPointer === x.length - 1) return false;
      ++xPointer;
    }
  }

  return false;
}

console.log(solution("", "")); // true
console.log(solution("hello world", "hello")); // true
console.log(solution("hello", "hello world")); // false
console.log(solution("sting", "sing")); // true
console.log(solution("abracadabra", "abc")); // true
console.log(solution("abc", "acb")); // false (order matters)
