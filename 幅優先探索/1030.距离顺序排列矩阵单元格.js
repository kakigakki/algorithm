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
    let res = []
    let queue = [
        [r0, c0]
    ]
    let visited = new Set()
    while (queue.length) {
        const [x, y] = queue.shift()
        if (x >= R || x < 0 || y >= C || y < 0 || visited.has(100 * x + y)) continue;
        [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ].forEach(move => {
            queue.push([move[0] + x, move[1] + y])
        })
        res.push([x, y])
        visited.add(100 * x + y)
    }
    return res
};
// @lc code=end