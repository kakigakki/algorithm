/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] 连通网络的操作次数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if (n > connections.length + 1) return -1
    const uf = new UnionFind(n)
    for (let i = 0; i < connections.length; i++) {
        uf.union(connections[i][0], connections[i][1])
    }
    return uf.getCount() - 1
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