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
    let left = 0,
        right = X - 1,
        satisfied = 0,
        res = 0
    const n = customers.length
    for (let i = 0; i < customers.length; i++) {
        if (customers[i] && !grumpy[i]) {
            satisfied += customers[i]
        }
    }

    while (right < n) {
        for (let i = left; i < X; i++) {
            if (!customers[i] || grumpy[i]) {
                satisfied += customers[i]
            }
        }
        res = Math.max(res, satisfied)
        right++
        if (customers[left] && !grumpy[left]) {
            satisfied -= customers[left]
        }
        left++
    }
    return res

};
// @lc code=end