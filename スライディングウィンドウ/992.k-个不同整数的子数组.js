/*
 * @lc app=leetcode.cn id=992 lang=javascript
 *
 * [992] K 个不同整数的子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    //因为「最多存在 K 个不同整数的子区间的个数」与「恰好存在 K 个不同整数的子区间的个数」的差恰好等于「最多存在 K - 1 个不同整数的子区间的个数」。
    //所以 [恰好存在 K 个不同整数的子区间的个数] = 「至多存在 K 个不同整数的子区间的个数」-「至多存在 K-1 个不同整数的子区间的个数」
    return MaxSubarraysWithKDistinct(A, K) - MaxSubarraysWithKDistinct(A, K - 1)
};

function MaxSubarraysWithKDistinct(A, K) {
    const n = A.length
    const nums = new Array(n + 1).fill(0)
    let left = 0,
        right = 0,
        numCount = 0,
        res = 0

    while (right < n) {
        if (!nums[A[right]]) {
            numCount++
        }
        nums[A[right]]++;
        right++
        while (numCount > K) {
            if (!--nums[A[left]]) {
                numCount--
            }
            left++
        }

        res += right - left
    }
    return res

}
// @lc code=end