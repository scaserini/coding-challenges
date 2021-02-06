const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

// O(n) solution
const Calculator = function () {
  this.evaluate = (string) => {
    let expression_arr = string.split(' ');

    if (expression_arr.length < 2) {
      return expression_arr.pop();
    }

    // loop for highest priority operation
    // Multiplications and divisions have a higher priority and should be performed left-to-right.
    let indx = 0;
    while (indx < expression_arr.length) {
      let char = expression_arr[indx];
      if (char == '*' || char == '/') {
        let result = operators[char](+expression_arr[indx - 1], +expression_arr[indx + 1]);
        expression_arr.splice(indx - 1, 3, result);
      } else {
        indx++;
      }
    }

    // loop to solve
    // Additions and subtractions have a lower priority and should also be performed left-to-right.
    indx = 0;
    while (indx < expression_arr.length) {
      let char = expression_arr[indx];
      if (char in operators) {
        let result = operators[char](+expression_arr[indx - 1], +expression_arr[indx + 1]);
        expression_arr.splice(indx - 1, 3, result);
      } else {
        indx++;
      }
    }

    return expression_arr.pop();
  };
};
