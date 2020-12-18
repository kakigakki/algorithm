/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class Trie {
    constructor() {
        this.hash = Object.create(null)
    }

    insert(word) {
        let map = this.hash
        for (const c of word) {
            if (!map[c]) {
                map[c] = Object.create(null)
            }
            map = map[c]
        }
        map.isEnd = true
        return this.hash
    }
    search(word) {
        let map = this.hash
        for (const c of word) {
            if (!map[c]) {
                return false
            }
            map = map[c]
        }
        return map.isEnd ? true : false
    }

    startsWith(preFix) {
        let map = this.hash
        for (const c of preFix) {
            if (!map[c]) {
                return false
            }
            map = map[c]
        }
        return true
    }
}
// @lc code=end