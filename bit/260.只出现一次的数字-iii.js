/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0
    const res = [0, 0]
        //算出异或值。其实就是两个不同元素的异或。
    for (const num of nums) {
        xor ^= num
    }
    //算出xor最低位1的值 如xor位00100100,那么mask就是00000100
    const mask = xor & (-xor)
    for (const num of nums) {
        if (num & mask) {
            res[0] ^= num
        } else {
            res[1] ^= num
        }
    }
    return res

};
// @lc code=end