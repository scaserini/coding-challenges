/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let usedTickets = new Set();
  let itinerary = [];

  let adjList = {};
  for (let [from, to] of tickets) {
    if (!adjList[from]) adjList[from] = [];
    adjList[from].push(to);
  }

  for (let key in adjList) {
    adjList[key].sort();
  }

  dfs(tickets.length, adjList, 'JFK', usedTickets, itinerary);

  return ['JFK', ...itinerary];
};

var dfs = (numberOfTickets, adjList, from, usedTickets, itinerary) => {
  if (usedTickets.size == numberOfTickets) return true;
  if (adjList[from]) {
    for (let i = 0; i < adjList[from].length; i++) {
      let to = adjList[from][i];
      let key = `${from}:${to}:${i}`;
      if (!usedTickets.has(key)) {
        usedTickets.add(key);
        if (dfs(numberOfTickets, adjList, to, usedTickets, itinerary)) {
          itinerary.unshift(to);
          return true;
        }
        usedTickets.delete(key);
      }
    }
  }
  return false;
};
