/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let left = 0,
        right = 0,
        //记录当前窗口共有几个1
        ones = 0
    const n = A.length
    while (right < n) {
        if (A[right]) ones++;
        //如果窗口长度大于1的个数+K，则证明需要缩小窗口
        if (right - left + 1 > ones + K) {
            if (A[left]) {
                ones--
            }
            left++
        }
        right++
    }
    return right - left
};
// @lc code=end