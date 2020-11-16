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
    let res = []
    let map = {}
    for (const item of nums1) {
        map[item] = (map[item] || 0) + 1
    }
    for (const item of nums2) {
        if (map[item]) {
            res.push(item)
            map[item]--
        }
    }
    return res
};
// @lc code=end