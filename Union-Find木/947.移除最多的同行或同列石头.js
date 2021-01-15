/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
//一种方法：直接用二维数组对比每个石头的纵坐标横坐标
//另一种方法：因为x,y小于10000，所以将二维数组拉平，横坐标+10001
var removeStones = function(stones) {
    const n = stones.length
    const uf = new UnionFind(stones.length)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
                uf.union(i, j)
            }
        }
    }
    return n - uf.getCount()
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