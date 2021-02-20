/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    //本体求的是最短的子数组，所有子数组的前后应该都为出现频数最多的元素
    //即本题虽然长得像滑窗，但是并不是滑窗
    const n = nums.length,
        left = {},
        right = {},
        counter = {}
    let min = Infinity
    let maxCount = 0
    for (let i = 0; i < n; i++) {

        const key = nums[i]
            //倒序指针
        const j = n - 1 - i
        if (left[key] === undefined) {
            left[key] = i
        }
        if (right[nums[j]] === undefined) {
            right[nums[j]] = j
        }
        counter[key] = (counter[key] || 0) + 1
        maxCount = Math.max(maxCount, counter[key])
    }

    for (const key in counter) {
        if (counter[key] === maxCount) {
            min = Math.min(min, right[key] - left[key] + 1)
        }
    }
    return min
};
// @lc code=end