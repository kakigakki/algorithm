/*
 * @lc app=leetcode.cn id=1584 lang=javascript
 *
 * [1584] 连接所有点的最小费用
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    //使用Kruskal算法
    //算出所有顶点的所有边，然后从小到大排序，然后用并查集判断是否会变成环，如果会变成环，则跳过此边
    const n = points.length
    const edges = []
    const uf = new UnionFind(n)
    let res = 0
    let count = 0
    if (n === 1) return 0
    const absDistance = (i, j) => {
        return Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            edges.push([absDistance(i, j), i, j])
        }
    }

    edges.sort((a, b) => a[0] - b[0])
    for (const [dis, p1, p2] of edges) {
        if (uf.connected(p1, p2)) continue
        uf.union(p1, p2)
        res += dis
        if (++count === n - 1) return res
    }
};

class UnionFind {
    constructor(n) {
        this.count = n
        this.parent = Array.from({ length: n }, (_, index) => index)
        this.size = new Array(n).fill(1)
    }

    find(node) {
        while (this.parent[node] !== node) {
            //路径优化，将时间复杂度降到O（1）
            this.parent[node] = this.parent[this.parent[node]]
            node = this.parent[node]
        }
        return node
    }

    connected(node1, node2) {
        let root1 = this.find(node1)
        let root2 = this.find(node2)
        return root1 === root2
    }

    union(node1, node2) {
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

    getCount() {
        return this.count
    }
}
// @lc code=end