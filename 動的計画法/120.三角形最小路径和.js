/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    //f[i][j] = math.min(f[i+1][j],f[i+1][j+1])
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = triangle[i].length - 1; j >= 0; j--) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
        }
    }
    return triangle[0][0]
};
// @lc code=end