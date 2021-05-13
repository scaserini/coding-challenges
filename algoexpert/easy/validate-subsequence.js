function isValidSubsequence(array, sequence) {
  let arrayIndx = 0;
  let sequenceIndx = 0;

  while (arrayIndx < array.length) {
    if (array[arrayIndx] === sequence[sequenceIndx]) sequenceIndx++;
    arrayIndx++;
  }

  return sequenceIndx === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
