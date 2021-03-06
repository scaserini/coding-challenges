/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  let map = {};
  let resultNames = [];

  for (let name of names) {
    if (!map[name]) {
      map[name] = 1;
      resultNames.push(name);
    } else {
      let newName = name;
      while (map[newName]) {
        newName = name + '(' + map[name] + ')';
        map[name]++;
      }
      resultNames.push(newName);
      map[newName] = 1;
    }
  }

  return resultNames;
};
