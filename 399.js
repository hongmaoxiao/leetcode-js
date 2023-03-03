/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
  const equationSize = equations.length;
  const map = new Map();
  let id = 0;
  const union = new UnionFind();
  union.UnionFind(2 * equationSize);
  for (let i = 0; i < equationSize; i++) {
    const [str1, str2] = equations[i];
    if (!map.has(str1)) {
      map.set(str1, id);
      id++;
    }
    if (!map.has(str2)) {
      map.set(str2, id);
      id++;
    }

    union.union(map.get(str1), map.get(str2), values[i]);
  }
  const res = [];
  for (let i = 0; i < queries.length; i++) {
    const x = map.get(queries[i][0]);
    const y = map.get(queries[i][1]);

    if (x == null || y == null) {
      res[i] = -1;
    } else {
      res[i] = union.isConnect(x, y);
    }
  }
  return res;
};

class UnionFind {
  parent = [];
  weight = [];

  UnionFind(n) {
    this.parent = new Array(n);
    this.weight = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.weight[i] = 1.0;
    }
  }

  union(x, y, value) {
    const root1 = this.find(x);
    const root2 = this.find(y);
    if (root1 === root2) {
      return;
    }
    this.parent[root1] = root2;
    this.weight[root1] = (this.weight[y] * value) / this.weight[x];
  }

  find(x) {
    if (this.parent[x] !== x) {
      const origin = this.parent[x];
      this.parent[x] = this.find(this.parent[x]);
      this.weight[x] *= this.weight[origin];
    }
    return this.parent[x];
  }

  isConnect(x, y) {
    const rootx = this.find(x);
    const rooty = this.find(y);
    if (rootx !== rooty) {
      return -1;
    }
    return this.weight[x] / this.weight[y];
  }
}

const equations = [["a","b"],["b","c"]]
const values = [2.0,3.0]
const queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
calcEquation(equations, values, queries)