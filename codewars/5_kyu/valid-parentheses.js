function validParentheses(parens) {
  let stack = [];

  for (let paren of parens) {
    if (paren === '(') stack.push('(');
    if (paren === ')' && stack.pop() !== '(') return false;
  }

  return stack.length === 0;
}
