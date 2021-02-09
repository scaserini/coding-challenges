/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  let nonOverlappingIntervals = intervals.sort((a, b) => a[0] - b[0]);
  let indx = 1;

  while (indx < intervals.length) {
    let [first_start, first_end] = intervals[indx - 1];
    let [second_start, second_end] = intervals[indx];
    if (second_start <= first_end) {
      let interval_start = Math.min(first_start, second_start);
      let interval_end = Math.max(first_end, second_end);
      nonOverlappingIntervals.splice(indx - 1, 2, [interval_start, interval_end]);
    } else {
      indx++;
    }
  }

  return nonOverlappingIntervals;
};
