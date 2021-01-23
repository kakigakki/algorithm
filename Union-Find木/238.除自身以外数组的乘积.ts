/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const leftArr = [1]
  let r = 1
  for (let i = 1; i < nums.length; i++) {
      leftArr[i] = nums[i-1] *leftArr[i-1]
  }

  for (let i = nums.length-1; i >= 0;i--) {
      leftArr[i] = r*leftArr[i]
      r = r*nums[i]
  }

  return leftArr
};
// @lc code=end

