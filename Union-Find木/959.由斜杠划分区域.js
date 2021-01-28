/*
 * @lc app=leetcode.cn id=959 lang=javascript
 *
 * [959] 由斜杠划分区域
 */

// @lc code=start
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const N = grid.length
        //将每个单元格划为4份
    const uf = new UnionFind(N * N * 4)
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            //当前行当前列单元格的第一个部分
            const index = 4 * (i * N + j)
            const char = grid[i][j]
            if (char === "/") {
                //合并第1个部分和第4个部分
                uf.union(index, index + 3)
                    //合并第2个部分和第3个部分
                uf.union(index + 1, index + 2)
            } else if (char === "\\") {
                uf.union(index, index + 1)
                uf.union(index + 2, index + 3)
            } else {
                uf.union(index, index + 1)
                uf.union(index, index + 2)
                uf.union(index, index + 3)
            }
            //单元格之间的合并，与右边单元格合并
            if (j < N - 1) {
                uf.union(index + 1, 4 * (i * N + j + 1) + 3)
            }
            //与下面单元格合并
            if (i < N - 1) {
                uf.union(index + 2, 4 * ((i + 1) * N + j))
            }
        }
    }
    return uf.getCount()

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