/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    //dp[i] = dp[i-1][j-1]+1
    let res = 0
    const dp = new Array(A.length + 1).fill(0).map(() => new Array(B.length + 1).fill(0))
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                dp[i + 1][j + 1] = dp[i][j] + 1
            }
            res = Math.max(res, dp[i + 1][j + 1])
        }
    }
    return res
};
// @lc code=end