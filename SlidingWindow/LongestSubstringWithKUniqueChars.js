//www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/

/**
 *
 * @param {string} str
 * @param {number} k
 */
// function LongestSubStringWithUniqueKChars(str, k) {
//   if (!str) return 0;
//   if (k === 0) return 0;
//   let uniqueCharsCountDown = k - 1;
//   const stack = [[str[0], 1]];
//   let maxResult = (counter = 1);
//   let reset = false;
//   for (let index = 1; index < str.length; index++) {
//     const char = str[index];
//       const sameCharAsPrevious = char === str[index - 1];
//     if (sameCharAsPrevious) {
//       counter++;
//       let [currentChar, currentCharCount] = stack.pop();
//       // update current char count
//       stack.push([currentChar, ++currentCharCount]);
//     } else {
//       let [prevChar, prevCharCount] = stack.pop();
//       stack.push([char, 1]);
//       if (--uniqueCharsCountDown >= 0) {
//         counter++;
//       } else {
//         const UNIQUE_COUNTED_CHARS = 2;
//         uniqueCharsCountDown = k - UNIQUE_COUNTED_CHARS;
//         counter = k === 1 ? 1 : ++prevCharCount;
//         reset = true;
//       }
//     }
//     maxResult = Math.max(maxResult, counter);
//   }

//   if (uniqueCharsCountDown > 0 && !reset) {
//     return null;
//   }
//   return maxResult;
// }

/**
 *
 * @param {string} str
 * @param {number} k
 */
function LongestSubStringWithUniqueKChars(str, k) {
  if (!str) return 0;
  if (k === 0) return 0;
  const map = new Map();
  // set first char into map
  map.set(str[0], 1);
  let maxStart = 0;
  let maxSize = 1;

  for (let index = 1; index < str.length; index++) {
    const char = str[index];
    if (!map.has(char)) {
      map.set(char, index);
    }
    if (map.size > k) {
      const startOfWindowChar = map.keys().next().value;
      map.delete(startOfWindowChar);

      maxStart = map.values().next().value;
    }
    maxSize = Math.max(maxSize, index - maxStart + 1);
  }

  return map.size < k ? null : maxSize;
}

console.log(LongestSubStringWithUniqueKChars("aabbcc", 3));
console.log(LongestSubStringWithUniqueKChars("abccccddddd", 2));
console.log(LongestSubStringWithUniqueKChars("abcdef", 5));
console.log(LongestSubStringWithUniqueKChars("a", 1));
console.log(LongestSubStringWithUniqueKChars("aabbcc", 1));
console.log(LongestSubStringWithUniqueKChars("abbbcc", 1));
console.log(LongestSubStringWithUniqueKChars("aabbcc", 0));
console.log(LongestSubStringWithUniqueKChars("", 1));
console.log(LongestSubStringWithUniqueKChars("aabbcc", 4));
