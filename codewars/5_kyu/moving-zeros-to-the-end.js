var moveZeros = function (arr) {
  let filteredArray = arr.filter((el) => el !== 0);
  let zerosArray = Array(arr.length - filteredArray.length).fill(0);
  return filteredArray.concat(zerosArray);
};
