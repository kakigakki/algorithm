/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            this.arr[i] = nums[i]
        } else {
            this.arr[i] = this.arr[i - 1] + nums[i]
        }
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return i ? this.arr[j] - this.arr[i - 1] : this.arr[j]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end