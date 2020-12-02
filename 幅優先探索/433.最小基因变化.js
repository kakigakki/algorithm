/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    const bankSet = new Set(bank)
    if (!bankSet.has(end)) return -1
    const dna = ["A", "C", "G", "T"]
    const queue = [
        [start, 0]
    ]
    while (queue.length) {
        let [curWord, count] = queue.shift()
        count++
        for (let i = 0; i < dna.length; i++) {
            for (let j = 0; j < curWord.length; j++) {
                const newWord = curWord.slice(0, j) + dna[i] + curWord.slice(j + 1)
                if (bankSet.has(newWord)) {
                    if (newWord === end) return count
                    queue.push([newWord, count])
                    bankSet.delete(newWord)
                }
            }
        }
    }
    return -1

};
// @lc code=end