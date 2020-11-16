/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    if (nums == null || nums.length < 3) return [];
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) continue
            //此时三数之和肯定大于0了 ，所以直接返回
        if (nums[i] > 0) return res
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                res.push([nums[i], nums[left], nums[right]])
                    //去重
                while (nums[left] == nums[++left]) continue
                while (nums[right] == nums[--right]) continue
            }
        }
    }

    return res
};
// @lc code=end