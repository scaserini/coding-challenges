// ~800ms solution
function combos(n) {
  return combosRecursive(n, n, []);
}

function combosRecursive(number, remainders, array) {
  if (remainders <= 0) return [array];
  let results = [];
  // we add numbers to combos in decreasing order.
  // to avoid calculating existing combos (for example [7,2,1], [7,1,2]) we want to add numbers that are
  // less than or equal to the last number inserted in the combo
  let from = array.length > 0 ? Math.min(remainders, array[array.length - 1]) : remainders;

  for (let i = from; i > 0; i--) {
    let remainders = number - [...array, i].reduce((a, c) => a + c);
    results.push(...combosRecursive(number, remainders, [...array, i]));
  }

  return results;
}
