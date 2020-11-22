/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
//双指针
var sortArrayByParityII = function(A) {
    let j = 1
    for (let i = 0; i < A.length; i += 2) {
        if (A[i] & 1) {
            while (A[j] & 1) {
                j += 2
            }
            [A[i], A[j]] = [A[j], A[i]]
        }
    }
    return A
};
// @lc code=end