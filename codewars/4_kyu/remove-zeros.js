function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  let length = array.length;
  let numberOfZeros = 0;
  for (let i = 0; i < length; i++) {
    if (array[i] === 0 || array[i] === '0') {
      numberOfZeros++;
    }
  }

  let i = 0;
  while (i < length) {
    if ((array[i] === 0 || array[i] === '0') && numberOfZeros > 0) {
      let temp = array[i];
      for (let j = i; j < length - 1; j++) {
        array[j] = array[j + 1];
      }
      // move 'zero value' to the end
      array[length - 1] = temp;
      // to avoid infinite loop, count the 'zero values' that are moved to the end
      numberOfZeros--;
    } else {
      i++;
    }
  }
  // the correctly sorted array should be returned.
  return array;
}
