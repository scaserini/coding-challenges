function solution(list) {
  let start = 0;
  let end = 1;
  let result = [];

  while (end < list.length) {
    if (Math.abs(list[end] - list[start]) != end - start) {
      if (end - start > 2) {
        result.push(`${list[start]}-${list[end - 1]}`);
        start = end;
      } else {
        result.push(list[start]);
        start++;
      }
    }
    end++;
  }

  if (end - start <= 2) {
    end - start == 2 && result.push(list[start]);
    result.push(list[end - 1]);
  } else {
    result.push(`${list[start]}-${list[end - 1]}`);
  }

  return result.join();
}
