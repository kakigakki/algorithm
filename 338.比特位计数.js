/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
//考察动态规划与位运算符
var countBits = function(num) {
    //第一种方法： (n-1) & n 可以将最低位的1清零 可以将比偶数大1的奇数减1，将偶数保持不变

    // const dp = [0]
    // for (let i = 1; i <= num; i++) {
    //     dp[i] = dp[(i - 1) & i] + 1
    // }
    // return dp


    //第二种方法：n>>1 可以看成Math.floor(n/2) ; n&1 可以堪称n%2
    const dp = [0]
    for (let i = 1; i <= num; i++) {
        dp.push(dp[i >> 1] + (i & 1))
    }
    return dp
};
// @lc code=end