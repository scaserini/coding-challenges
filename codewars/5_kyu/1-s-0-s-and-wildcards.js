/*
          1?1?
      
      101?    110?    

  1010 1011  1100  1101
*/

// BFS solution
function possibilities(str) {
  let result = [];
  let queue = [];
  queue.push(str);

  // [1?1?] -> [101?, 111?] -> [1010, 1011, 1110, 1111]
  while (queue.length > 0) {
    let str = queue.shift();
    if (!/\?/.test(str)) {
      result.push(str);
      continue;
    }
    queue.push(str.replace('?', 0));
    queue.push(str.replace('?', 1));
  }

  return result;
}

// DFS solution
function possibilities(str) {
  let result = [];
  dfs(str, result);
  return result;
}

function dfs(str, result) {
  if (!/\?/.test(str)) return result.push(str);
  dfs(str.replace('?', 0), result);
  dfs(str.replace('?', 1), result);
}
