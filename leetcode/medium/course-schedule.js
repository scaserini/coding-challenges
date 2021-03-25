/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  /* Basically, find if a cycle exists in the graph */

  // visited nodes array
  let visited = Array(numCourses).fill(0);
  // build adjacency list
  let adjList = {};
  for (let [course, prerequisite] of prerequisites) {
    if (!adjList[course]) {
      adjList[course] = [];
    }
    adjList[course].push(prerequisite);
  }

  for (let course in adjList) {
    if (visited[course] == 0 && !dfs(adjList, course, visited)) {
      return false;
    }
  }

  return true;
};

function dfs(adjList, course, visited) {
  if (visited[course] == -1) {
    return false;
  }

  // mark current visiting nodes with -1
  visited[course] = -1;

  if (adjList[course]) {
    for (let c of adjList[course]) {
      if (visited[c] != 1 && !dfs(adjList, c, visited)) {
        return false;
      }
    }
  }
  
  // then, mark nodes with 1 (previously visited)
  visited[course] = 1;
  return true;
}
