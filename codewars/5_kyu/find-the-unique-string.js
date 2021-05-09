function findUniq(arr) {
  // [ 'silvia', 'vasili', 'victor' ] => [ 'ailsv', 'ailsv', 'ciortv' ]
  let stringsArr = arr.map((word) => {
    word = word.replace(/ /g, '').toLowerCase();
    let hash = new Set([...word]);
    return [...hash].sort().join('');
  });

  for (let i = 0; i < stringsArr.length; i++) {
    let str = stringsArr[i];
    // A way to return the different string.
    if (stringsArr.indexOf(str) === stringsArr.lastIndexOf(str)) return arr[i];
  }
}
