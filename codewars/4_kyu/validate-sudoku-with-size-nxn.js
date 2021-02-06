const Sudoku = function (data) {
  let size = data.length;
  let sorted_numbers = Array.from({ length: size }, (_, i) => i + 1).toString();
  const sortFunction = (a, b) => a - b;

  function areRowsValid() {
    for (let i = 0; i < size; i++) {
      if ([...data[i]].sort(sortFunction).toString() !== sorted_numbers) {
        return false;
      }
    }
    return true;
  }

  function areColumnsValid() {
    for (let i = 0; i < size; i++) {
      let column = [];
      for (let j = 0; j < size; j++) {
        column.push(data[j][i]);
      }
      if (column.sort(sortFunction).toString() !== sorted_numbers) {
        return false;
      }
    }
    return true;
  }

  function areSubgridsValid() {
    let subgrid_size = Math.sqrt(size);

    // loop through all the subgrids
    for (let i = 0; i < subgrid_size; i++) {
      for (let j = 0; j < subgrid_size; j++) {
        let subgrid = [];
        // loop through all the rows in each subgrid
        for (let k = 0; k < subgrid_size; k++) {
          let row_indx = i * subgrid_size + k;
          let col_indx = j * subgrid_size;
          subgrid.push(...data[row_indx].slice(col_indx, col_indx + subgrid_size));
        }
        if (subgrid.sort(sortFunction).toString() !== sorted_numbers) {
          return false;
        }
      }
    }
    return true;
  }

  return {
    isValid: function () {
      if (areRowsValid() && areColumnsValid() && areSubgridsValid()) {
        return true;
      }
      return false;
    },
  };
};
