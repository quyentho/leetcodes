/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = (i = j = 0);
  const seen = {};
  while (j < s.length) {
    const currentChar = s[j];
    // check if current char is seen and if it is seen, check if it is in the current window
    // eg: "tmmzuxt" when j is at the end, we see "t" again,
    // but we don't want to move the i back to the start
    if (seen[currentChar] >= i) {
      max = Math.max(max, j - i);

      // move i upto seen position + 1
      i = seen[currentChar] + 1;

      // set new seen position
      seen[currentChar] = j;
    } else {
      seen[currentChar] = j;
    }

    ++j;
  }

  // we have not evaluated the value when j reaches the end
  return Math.max(max, j - i);
};

console.log(lengthOfLongestSubstring("abc"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("tmmzuxt"));

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("abba"));
console.log(lengthOfLongestSubstring("bbbbb"));
