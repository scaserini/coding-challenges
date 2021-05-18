function dirReduc(arr) {
  let stack = [];
  const opposites = { NORTH: 'SOUTH', SOUTH: 'NORTH', WEST: 'EAST', EAST: 'WEST' };

  for (let dir of arr) {
    const lastElementInStack = stack[stack.length - 1];
    if (opposites[dir] === lastElementInStack) {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }

  return stack;
}
