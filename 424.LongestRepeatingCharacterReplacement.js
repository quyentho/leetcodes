/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let longestRepeatedSubString = 0;
  let runningPointer = 0;
  let replaceTime = k;
  let breakPosition = 0;
  let checkingPointer = 0;

  while (runningPointer < s.length) {
    const currentChar = s[runningPointer];

    if (currentChar !== s[checkingPointer]) {
      if (replaceTime === k) {
        // it means we are at the first time of replacing
        breakPosition = runningPointer;
      }
      if (replaceTime > 0) {
        --replaceTime;
      } else {
        longestRepeatedSubString = Math.max(
          longestRepeatedSubString,
          runningPointer - checkingPointer
        );
        runningPointer = breakPosition;
        checkingPointer = breakPosition;
        replaceTime = k;
      }
    }

    ++runningPointer;
  }

  // we have not evaluated the value when j reaches the end
  // if we reach the end but we still have replaceTime left, we can use it to added to the result string
  // but we don't want it to over the length of the original string.
  return Math.max(
    longestRepeatedSubString,
    Math.min(runningPointer - checkingPointer + replaceTime, s.length)
  );
};

console.log(characterReplacement("AAAB", 0));
console.log(characterReplacement("ABBB", 2));
console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
