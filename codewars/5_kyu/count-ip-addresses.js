function ipsBetween(start, end) {
  let start_arr = start.split('.');
  let end_arr = end.split('.');
  let indx = 0;
  while (start_arr[indx] == end_arr[indx]) {
    indx++;
  }
  let sum = 0;
  let arr_length = start_arr.length - 1;
  for (let i = arr_length; i >= indx; i--) {
    sum += (end_arr[i] - start_arr[i]) * 256 ** (arr_length - i);
  }
  return sum;
}
