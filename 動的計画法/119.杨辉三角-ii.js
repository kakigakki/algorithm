/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//空间复杂度（k）
var getRow = function(rowIndex) {
    const dp = new Array(rowIndex + 1)
    for (let i = 0; i <= rowIndex; i++) {
        dp[0] = 1
        dp[i] = 1
            //因为正序循环，会导致等号右边的值为新值，所以为了保证都为旧值，需要倒序循环
        for (let j = i - 1; j > 0; j--) {
            dp[j] = dp[j] + dp[j - 1]
        }
    }
    return dp
};
// @lc code=end