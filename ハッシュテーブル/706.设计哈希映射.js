/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.base = 769
    this.data = new Array(this.base).fill(0).map(() => new Array())
        //[hash1[{key1:value1}],hash2]
};
MyHashMap.prototype.put = function(key, value) {
    const hashcode = this.getHashcode(key)
    const bucket = this.data[hashcode]
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][key] !== undefined) {
            bucket[i][key] = value
            return
        }
    }
    bucket.push({
        [key]: value
    })
};
MyHashMap.prototype.get = function(key) {
    const hashcode = this.getHashcode(key)
    const bucket = this.data[hashcode]
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][key] !== undefined) {
            return bucket[i][key]
        }
    }
    return -1
};
MyHashMap.prototype.remove = function(key) {
    const hashcode = this.getHashcode(key)
    const bucket = this.data[hashcode]
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][key] !== undefined) {
            bucket.splice(i, 1)
            return
        }
    }
    return

};
MyHashMap.prototype.getHashcode = function(key) {
    return key % this.base
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end