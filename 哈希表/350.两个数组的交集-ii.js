/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {}
    let res = []
    for (const n of nums1) {
        map[n] = (map[n] || 0) + 1
    }
    for (const n of nums2) {
        if (map[n]) {
            map[n]--
                res.push(n)
        }
    }
    return res
};
// @lc code=end