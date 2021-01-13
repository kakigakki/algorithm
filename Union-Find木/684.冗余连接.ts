/*
 * @lc app=leetcode.cn id=684 lang=typescript
 *
 * [684] 冗余连接
 */

// @lc code=start
function findRedundantConnection(edges: number[][]): number[] {
  const uf: UnionFind = new UnionFind(edges.length * 2)
  let res: number[]
  let count: number = 0
  for (const [x, y] of edges) {
    if (uf.find(x) === uf.find(y)) {
      res = [x, y]
      count++
    }
    uf.union(x, y)

  }
  return count > 1 ? edges.pop() : res
};

class UnionFind {
  private count: number
  private parent: number[]
  private size: number[]
  constructor(n: number) {
    this.count = n
    this.parent = Array.from({ length: n }, (_, index) => index)
    this.size = new Array(n).fill(1)
  }

  find(node: number): number {
    while (this.parent[node] !== node) {
      //路径优化，将时间复杂度降到O（1）
      this.parent[node] = this.parent[this.parent[node]]
      node = this.parent[node]
    }
    return node
  }

  connected(node1: number, node2: number): boolean {
    let root1 = this.find(node1)
    let root2 = this.find(node2)
    return root1 === root2
  }

  union(node1: number, node2: number): void {
    let root1 = this.find(node1)
    let root2 = this.find(node2)
    if (root1 === root2) return
    //时间优化，将极端不平衡树尽可能调平衡
    if (this.size[root1] > this.size[root2]) {
      this.parent[root2] = root1
      this.size[root1] += this.size[root2]
    } else {
      this.parent[root1] = root2
      this.size[root2] += this.size[root1]
    }
    this.count--
  }

  getCount(): number {
    return this.count
  }
}
// @lc code=end

