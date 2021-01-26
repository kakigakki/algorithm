/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const numArr = new Array(100).fill(0)
    let res = 0
    for (const [x, y] of dominoes) {
        const num = x > y ? y * 10 + x : x * 10 + y
        res += numArr[num]++
    }
    return res
};
// @lc code=end