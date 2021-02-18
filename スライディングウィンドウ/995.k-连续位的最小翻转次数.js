/*
 * @lc app=leetcode.cn id=995 lang=javascript
 *
 * [995] K 连续位的最小翻转次数
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
    let res = 0
    const n = A.length
    for (let i = 0; i < n; i++) {
        //贪心算法，如果遇到1则直接跳过
        if (A[i]) continue
            //如果当前翻转区间大于n的话，则不可能成功，返回-1
        if (i + K > n) return -1

        //翻转次数+1
        res++
        //当前索引往后K个数，全部翻转
        for (let j = 0; j < K; j++) {

            A[i + j] ^= 1
        }
    }
    return res

};
// @lc code=end