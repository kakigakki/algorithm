/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (A.length === 1) return true
    let flag = A[A.length - 1] > A[0]
    for (let i = 1; i < A.length; i++) {
        if (flag) {
            if (A[i] < A[i - 1]) return false
        } else {
            if (A[i] > A[i - 1]) return false
        }
    }
    return true
};
// @lc code=end