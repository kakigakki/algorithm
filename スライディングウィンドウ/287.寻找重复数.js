/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    //类似环形链表2
    let slow = 0,
        fast = 0
    do {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }
    while (slow !== fast)

    fast = 0
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
};
// @lc code=end