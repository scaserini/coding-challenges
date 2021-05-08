function orderWeight(strng) {
  let numbers = strng.split(' ');

  numbers.sort((firstNumber, secondNumber) => {
    let firstWeight = calcWeight(firstNumber);
    let secondWeight = calcWeight(secondNumber);
    // When two numbers have the same "weight", let's
    // consider them to be strings and not numbers.
    if (firstWeight === secondWeight) {
      return firstNumber < secondNumber ? -1 : 1;
    }
    return firstWeight - secondWeight;
  });

  return numbers.join(' ');
}

function calcWeight(number) {
  let digits = number.split('').map(Number);
  return digits.reduce((weight, digit) => weight + digit);
}
