const snail = function (array) {
  if (array.length < 2) {
    return array.pop();
  }

  let min_indx = 0;
  let max_indx = array.length - 1;
  let result = [];
  let row = 0;
  let col = 0;
  while (min_indx <= max_indx) {
    // travel right
    while (col <= max_indx) {
      result.push(array[row][col++]);
    }
    col--;
    row++;

    // travel bottom
    while (row <= max_indx) {
      result.push(array[row++][col]);
    }
    row--;
    col--;

    // travel left
    while (col >= min_indx) {
      result.push(array[row][col--]);
    }
    col++;
    row--;
    // update min_indx and max_indx here, so next travels (top and right) stops at the right indx
    min_indx++;
    max_indx--;

    // travel top
    while (row >= min_indx) {
      result.push(array[row--][col]);
    }
    row++;
    col++;
  }

  return result;
};
