/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visited = new Set();
  canVisitAllRoomsRecursive(rooms, visited, 0);
  return visited.size === rooms.length;
};

var canVisitAllRoomsRecursive = (rooms, visited, idx) => {
  visited.add(idx);
  for (let key of rooms[idx]) {
    if (!visited.has(key)) {
      canVisitAllRoomsRecursive(rooms, visited, key);
    }
  }
};
