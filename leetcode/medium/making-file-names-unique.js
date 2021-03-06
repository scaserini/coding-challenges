/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  let map = {};
  let result = [];

  for (let name of names) {
    if (!map[name]) {
      map[name] = 1;
      result.push(name);
    } else {
      let newName = name;
      while (map[newName]) {
        newName = name + '(' + map[name] + ')';
        map[name]++;
      }
      result.push(newName);
      map[newName] = 1;
    }
  }

  return result;
};
