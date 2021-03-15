/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.base = 769
    this.data = new Array(this.base).fill(0).map(() => new Array())
};

MyHashSet.prototype.add = function(key) {
    const hashcode = this.getHashcode(key)
    const bucket = this.data[hashcode]
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) return
    }
    bucket.push(key)
};
MyHashSet.prototype.remove = function(key) {
    const hashcode = this.getHashcode(key)
    const bucket = this.data[hashcode]
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) {
            bucket.splice(i, 1)
            return
        }
    }
};

MyHashSet.prototype.contains = function(key) {
    const hashcode = this.getHashcode(key)
    const bucket = this.data[hashcode]
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) {
            return true
        }
    }
    return false
};

MyHashSet.prototype.getHashcode = function(key) {
    return key % this.base
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end