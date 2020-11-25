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
    let bankSet = new Set(bank)
    if (!bankSet.has(end)) return -1
    const dna = ["A", "C", "G", "T"]
    let queue = [
        [start, 0]
    ]
    while (queue.length) {
        let [curNode, count] = queue.shift()
        count++
        for (let i = 0; i < dna.length; i++) {
            for (let j = 0; j < curNode.length; j++) {
                const newNode = curNode.slice(0, j) + dna[i] + curNode.slice(j + 1)
                if (bankSet.has(newNode)) {
                    if (newNode === end) return count
                    queue.push([newNode, count])
                    bankSet.delete(newNode)
                }
            }
        }
    }
    return -1
};
// @lc code=end