var largestDifference = function (data) {
  let max = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = data.length - 1; j >= i + 1; j--) {
      if (data[i] <= data[j]) max = Math.max(max, j - i);
    }
  }

  return max;
};
