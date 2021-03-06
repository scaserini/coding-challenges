/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.unshift(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 1;
  while (i < intervals.length) {
    let [startFirst, endFirst] = intervals[i - 1];
    let [startSecond, endSecond] = intervals[i];
    if (endFirst >= startSecond) {
      intervals[i - 1] = [Math.min(startFirst, startSecond), Math.max(endFirst, endSecond)];
      intervals.splice(i, 1);
    } else {
      i++;
    }
  }

  return intervals;
};

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length == 0) {
    return [newInterval];
  }

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[0] < intervals[i][0]) {
      intervals.splice(i, 0, newInterval);
      break;
    } else if (i == intervals.length - 1) {
      intervals.push(newInterval);
      break;
    }
  }

  let i = 1;
  while (i < intervals.length) {
    let [startFirst, endFirst] = intervals[i - 1];
    let [startSecond, endSecond] = intervals[i];
    if (endFirst >= startSecond) {
      intervals[i - 1] = [Math.min(startFirst, startSecond), Math.max(endFirst, endSecond)];
      intervals.splice(i, 1);
    } else {
      i++;
    }
  }

  return intervals;
};
