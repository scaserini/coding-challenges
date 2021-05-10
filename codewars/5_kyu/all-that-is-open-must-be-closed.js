function isBalanced(s, caps) {
  if (caps.length === 0) return true;
  let stack = [];

  for (let char of s) {
    let charIndx = caps.indexOf(char);
    if (charIndx === -1) continue;
    // Opening caps, es '(' '[' '-', are in the even indx in the caps
    if (charIndx % 2 == 0) {
      stack.push(char);
      if (areTheSameCap(stack, caps)) stack = stack.slice(0, -2);
      continue;
    }
    // The char is a closing cap
    let lastInStack = stack.pop();
    // If the last item in the stack is not the corrisponding opening cap, return false
    // In the caps list, the opening cap is before the corrisponding closing cap
    if (caps.indexOf(lastInStack) != charIndx - 1) return false;
  }

  return stack.length == 0;
}

function areTheSameCap(stack, caps) {
  const stackLen = stack.length;
  const lastChar = stack[stackLen - 1];
  // If the opening and closing caps are the same cap (es: '-', '@') the last two items in the stack are equal
  //  In the caps list there are 2 identical caps, one as opening cap, and the other as closing cap
  // We will remove the last two items in the stack if they are the same cap (es: '--', '@@')
  //  indexOf = lastIndexOf for caps like '(' or '[', but is different for caps like '-' or '@'
  return stack[stackLen - 2] === lastChar && caps.indexOf(lastChar) != caps.lastIndexOf(lastChar);
}
