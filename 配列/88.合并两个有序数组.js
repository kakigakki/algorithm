/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0
    let j = 0
    let stored = []
    while (i < m || j < n) {
        if (i === m) {
            stored.push(nums2[j++])
        } else if (j === n) {
            stored.push(nums1[i++])
        } else if (nums1[i] < nums2[j]) {
            stored.push(nums1[i++])
        } else {
            stored.push(nums2[j++])
        }
    }
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = stored[i]
    }
};
// @lc code=end