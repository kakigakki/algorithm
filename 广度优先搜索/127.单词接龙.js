/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordListSet = new Set(wordList)
    if (!wordListSet.has(endWord)) return 0
    let queue = [
        [beginWord, 1]
    ]
    while (queue.length) {
        let [curWord, count] = queue.shift()
        count++
        for (let i = 97; i < 124; i++) {
            for (let j = 0; j < curWord.length; j++) {
                const newWord = curWord.slice(0, j) + String.fromCodePoint(i) + curWord.slice(j + 1)
                if (wordListSet.has(newWord)) {
                    if (newWord === endWord) return count
                    queue.push([newWord, count])
                    wordListSet.delete(newWord)
                }
            }
        }
    }
    return 0
};

// @lc code=end