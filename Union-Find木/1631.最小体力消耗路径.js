/*
 * @lc app=leetcode.cn id=1631 lang=javascript
 *
 * [1631] 最小体力消耗路径
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const rows = heights.length
    const cols = heights[0].length
    if (rows === 1 && cols === 1) return 0
    const start = 0
    const end = rows * cols - 1
    const uf = new UnionFind(rows * cols)
    const edges = []
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const pos = i * cols + j
            if (i + 1 < rows) {
                edges.push([Math.abs(heights[i][j] - heights[i + 1][j]), pos, pos + cols])
            }
            if (j + 1 < cols) {
                edges.push([Math.abs(heights[i][j] - heights[i][j + 1]), pos, pos + 1])
            }
        }
    }
    edges.sort((a, b) => a[0] - b[0])
    for (const [dis, p1, p2] of edges) {
        uf.union(p1, p2)
        if (uf.connected(start, end)) return dis
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