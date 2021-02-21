function solution(input, markers) {
  return input
    .split('\n')
    .map((line) => {
      for (let marker of markers) {
        let occurrence = line.indexOf(marker);
        if (occurrence > -1) {
          return line.slice(0, occurrence).trim();
        }
      }
      return line;
    })
    .join('\n');
}
