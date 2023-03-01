/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const edges = new Array(numCourses).fill(0).map(() => new Array())
  const visited = new Array(numCourses).fill(0)
  let valid = true

  const dfs = u => {
    visited[u] = 1
    for (const curr of edges[u]) {
      if (visited[curr] === 0) {
        dfs(curr)
        if (!valid) {
          return
        }
      } else if (visited[curr] === 1) {
        valid = false
        return
      }
    }
    visited[u] = 2
  }

  for (const [to, from] of prerequisites) {
    edges[from].push(to)
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      dfs(i)
    }
  }

  return valid
};