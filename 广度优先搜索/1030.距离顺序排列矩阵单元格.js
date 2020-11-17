/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    const visited = new Set()
    const res =[]
    const queue = [
        [r0, c0]
    ]
    while (queue.length) {
        const [x, y] = queue.shift()
        if (x > R - 1 || y > C - 1 || x < 0 || y < 0 || visited.has(x*100+y)) continue
        res.push([x, y]);
        visited.add(x*100+y);
        [
            [0, 1],
            [0 ,-1],
            [1, 0],
            [-1, 0]
        ].forEach(move => {
            queue.push([x + move[0], y + move[1]])
        })
    }
    return res
};
// @lc code=end