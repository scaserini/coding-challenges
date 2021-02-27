function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 1;
  while (i < intervals.length) {
    let [firstStart, firstEnd] = intervals[i - 1];
    let [secondStart, secondEnd] = intervals[i];
    if (secondStart < firstEnd) {
      intervals[i - 1] = [firstStart, Math.max(firstEnd, secondEnd)];
      intervals.splice(i, 1);
    } else {
      i++;
    }
  }

  return intervals.reduce((sum, interval) => (sum += interval[1] - interval[0]), 0);
}
