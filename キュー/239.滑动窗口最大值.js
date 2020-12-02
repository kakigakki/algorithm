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
//单调递减栈得基础上让数据结构能够shift
var maxSlidingWindow = function(nums, k) {
    let res = []
    let deque = []
    for (let i = 0; i < nums.length; i++) {
        if (i - deque[0] >= k) deque.shift()
        while (nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop()
        }
        deque.push(i)
        if (i >= k - 1) {
            res.push(nums[deque[0]])
        }
    }
    return res
};
// @lc code=end