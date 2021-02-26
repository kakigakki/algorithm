/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let right = X - 1,
        satisfied = 0,
        res = 0
    const n = customers.length
        //获取排除X后，客人的满意度
    for (let i = 0; i < customers.length; i++) {
        if (customers[i] && !grumpy[i]) {
            satisfied += customers[i]
        }
    }
    //创建窗口
    for (let i = 0; i < X - 1; i++) {
        if (grumpy[i]) {
            satisfied += customers[i]
        }
    }
    while (right < n) {
        const left = right - X + 1
        if (grumpy[right]) {
            satisfied += customers[right]
        }
        res = Math.max(res, satisfied)
        if (grumpy[left]) {
            satisfied -= customers[left]
        }
        right++
    }
    return res

};
// @lc code=end