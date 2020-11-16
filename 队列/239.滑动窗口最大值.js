/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let deque = []
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (i - deque[0] >= k) deque.shift()
        while (nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop()
        }
        deque.push(i)
        if (i + 1 >= k) {
            res.push(nums[deque[0]])
        }
    }
    return res
};
// @lc code=end