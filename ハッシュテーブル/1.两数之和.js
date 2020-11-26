/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let ht = {};
  for (let i = 0; i < nums.length; i++) {
    if (ht[target - nums[i]] !== undefined) {
      return [i, ht[target - nums[i]]];
    }
    ht[nums[i]] = i;
  }
  return [];
};
// @lc code=end
