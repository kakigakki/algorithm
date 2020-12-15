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
        this.hash = {}
    }
    insert(word) {
        let map = this.hash
        for (const c of word) {
            if (!map[c]) {
                map[c] = {}
            }
            map = map[c]
        }
        map.isEnd = true
    }
    search(word) {
        let map = this.hash
        for (const c of word) {
            if (!map[c]) return false
            map = map[c]
        }
        return map.isEnd ? true : false
    }
    startsWith(prefix) {
        let map = this.hash
        for (const c of prefix) {
            if (!map[c]) return false
            map = map[c]
        }
        return true
    }
}
// @lc code=end