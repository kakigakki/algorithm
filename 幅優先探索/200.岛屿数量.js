/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    let m = grid.length
    let n = grid[0].length
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                count++
                let queue = [
                    [i, j]
                ];
                while (queue.length) {
                    const [x, y] = queue.shift();
                    if (x + 1 < m && grid[x + 1][y] === "1") {
                        queue.push([x + 1, y])
                        grid[x + 1][y] = "0";
                    }
                    if (x - 1 >= 0 && grid[x - 1][y] === "1") {
                        queue.push([x - 1, y])
                        grid[x - 1][y] = "0";
                    }
                    if (y + 1 < n && grid[x][y + 1] === "1") {
                        queue.push([x, y + 1])
                        grid[x][y + 1] = "0";
                    }
                    if (y - 1 >= 0 && grid[x][y - 1] === "1") {
                        queue.push([x, y - 1])
                        grid[x][y - 1] = "0";
                    }
                }
            }
        }
    }
    return count
};
// @lc code=end