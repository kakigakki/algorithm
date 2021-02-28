/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    //虽然长得像滑动窗口，但是用分治更方便
    const helper = (start, end) => {

        //如果当前字串长度小于K，则证明目标字串不存在，返回0（剪枝）
        if (end - start + 1 < k) {
            return 0
        }
        const bucket = new Array(26).fill(0)
            //计算出当前字串的字母个数，存进桶里
        for (let i = start; i <= end; i++) {
            bucket[s[i].charCodeAt() - 97]++
        }

        //如果当前字串长度大于等于k，且前指针所指向的字母个数小于k，则前指针+1 （剪枝）
        while (end - start + 1 >= k && bucket[s[start].charCodeAt() - 97] < k) {
            start++
        }

        //如果当前字串长度大于等于k，且后指针所指向的字母个数小于k，则后指针-1 （剪枝）
        while (end - start + 1 >= k && bucket[s[end].charCodeAt() - 97] < k) {
            end--
        }

        //如果当前字串长度小于K，则证明目标字串不存在，返回0（剪枝）
        if (end - start + 1 < k) {
            return 0
        }
        for (let i = start; i <= end; i++) {
            if (bucket[s[i].charCodeAt() - 97] < k) {
                return Math.max(helper(start, i - 1), helper(i + 1, end))
            }
        }
        return end - start + 1
    }
    return helper(0, s.length - 1)
};
// @lc code=end