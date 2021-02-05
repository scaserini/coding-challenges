function validParentheses(parens) {
  let stack = [];
  for (paren of parens) {
    if (paren == '(') {
      stack.push('(');
    } else if (paren == ')') {
      if (stack.pop() != '(') {
        return false;
      }
    }
  }
  return stack.length == 0;
}
