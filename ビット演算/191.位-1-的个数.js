/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
        //有多少个1就循环多少次
    while (n) {
        count++
        //将最低位的1给抹成0
        n = n & (n - 1)
    }
    return count
};
// @lc code=end