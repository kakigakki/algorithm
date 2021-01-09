/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(M) {
    const uf = new UnionFind(M.length)
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < i; j++) {
            if (M[i][j]) {
                uf.union(i, j)
            }
        }
    }
    return uf.getCount()
};

class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, index) => index)
        this.size = new Array(n).fill(1)
        this.count = n
    }

    getCount() {
        return this.count
    }

    findRoot(node) {
        while (node !== this.parent[node]) {
            //路径优化
            this.parent[node] = this.parent[this.parent[node]]
            node = this.parent[node]
        }
        return node
    }

    union(node1, node2) {
        let root1 = this.findRoot(node1)
        let root2 = this.findRoot(node2)
        if (root1 === root2) return
        if (this.size[root1] > this.size[root2]) {
            this.parent[root2] = root1
            this.size[root1] += this.size[root2]
        } else {
            this.parent[root1] = root2
            this.size[root2] += this.size[root1]
        }
        this.count--
    }
}
// @lc code=end