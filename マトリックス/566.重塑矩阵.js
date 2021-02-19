/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    //二维矩阵(i,j)转为一维矩阵：x = i*m+j
    //一维矩阵转为二维矩阵 i = Math.floor(x/m)  j = x%m
    const n = nums.length
    const m = nums[0].length
    if (n * m !== r * c) return nums
    const res = new Array(r).fill(0).map(() => new Array(c))
    for (let i = 0; i < n * m; i++) {
        res[Math.floor(i / c)][i % c] = nums[Math.floor(i / m)][i % m]
    }
    return res
};
// @lc code=end