/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果棒交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    // sumA + y -x = sumB +x -y
    const obj = {}
    const sumA = A.reduce((a, b) => a + b)
    const sumB = B.reduce((a, b) => a + b)
    for (const x of A) {
        obj[x] = (obj[x] | 0) + 1
    }
    for (const y of B) {
        const x = (sumA - sumB) / 2 + y
        if (obj[x]) return [x, y]
    }
};
// @lc code=end