// https://leetcode.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => {
    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;
    if (aStart === bStart) {
      return aEnd - bEnd;
    }
    return aStart - bStart;
  });
  console.log(intervals);

  const result = [intervals[0]];
  for (let index = 1; index < intervals.length; index++) {
    const [start, end] = result[result.length - 1];
    const [nextStart, nextEnd] = intervals[index];
    const isOverlapping = nextStart <= end;
    if (isOverlapping) {
      result.pop();
      if (nextEnd > end) {
        result.push([start, nextEnd]);
      } else {
        result.push([start, end]);
      }
    } else {
      result.push(intervals[index]);
    }
  }
  console.log(result);
  return result;
};

const intervals = [
  [1, 4],
  [0, 2],
  [3, 5],
];
merge(intervals);
