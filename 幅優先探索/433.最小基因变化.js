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
        let [nowDNA, count] = queue.shift()
        count++
        for (let i = 0; i < nowDNA.length; i++) {
            for (let j = 0; j < dna.length; j++) {
                const newDNA = nowDNA.slice(0, i) + dna[j] + nowDNA.slice(i + 1)
                if (bankSet.has(newDNA)) {
                    if (newDNA === end) return count
                    bankSet.delete(newDNA)
                    queue.push([newDNA, count])
                }
            }
        }
    }
    return -1

};
// @lc code=end