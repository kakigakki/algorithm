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
    const n = A.length
    let left = 0,
        right = 0,
        max = 0,
        ones = 0
    while (right < n) {
        if (A[right]) ones++;
        max = Math.max(max, ones)
        if (right - left + 1 > max + K) {
            if (A[left]) ones--;
            left++
        }
        right++
    }
    return right - left
};
// @lc code=end