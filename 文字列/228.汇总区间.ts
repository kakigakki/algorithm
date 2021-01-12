/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  let left:number = nums[0]
  let right:number = nums[0]
  const res:string[] = []
  for (let i = 1; i <= nums.length; i++) {
    if(right+1!==nums[i]){
      if(left===right){
        res.push(left+"")
      }else{
        res.push(left+"->"+right)
      }
      left = nums[i]
    }
      right = nums[i]
  }
  return res
};
// @lc code=end

