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
    let queue = [
        [r0, c0]
    ]
    let visited = new Set()
    let res = []
    while (queue.length) {
        let [x, y] = queue.shift()
        if (x >= R || x < 0 || y >= C || y < 0 || visited.has(100 * x + y)) continue
        visited.add(100 * x + y);
        res.push([x, y]);
        [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ].forEach(move => {
            queue.push([move[0] + x, move[1] + y])
        })

    }
    return res

};
// @lc code=end