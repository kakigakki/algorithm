/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board.length) return
    const n = board.length
    const m = board[0].length
    const uf = new UnionFind(n * m)
    const dummy = n * m
    const arr = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "O") {
                if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
                    uf.union(i * m + j, dummy)
                } else {
                    arr.forEach(around => {
                        const x = around[0] + i
                        const y = around[1] + j
                        if (board[x][y] === "O") {
                            uf.union(i * m + j, x * m + y)
                        }
                    })
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "O" && !uf.connected(i * m + j, dummy)) {
                board[i][j] = "X"
            }
        }
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