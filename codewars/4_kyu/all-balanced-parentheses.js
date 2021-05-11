function balancedParens(n) {
  if (n === 0) return [''];
  let result = [];
  recursive(n, result, 0, 0, '');
  return result;
}

function recursive(n, result, openParens, closeParens, str) {
  if (str.length === 2 * n) result.push(str);
  if (openParens < n) recursive(n, result, openParens + 1, closeParens, str + '(');
  if (closeParens < openParens) recursive(n, result, openParens, closeParens + 1, str + ')');
}
