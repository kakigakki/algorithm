/*
 * @lc app=leetcode.cn id=721 lang=javascript
 *
 * [721] 账户合并
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    //创建邮箱，用户的Map
    //创建邮箱，编号的Map
    //通过编号进行合并邮箱
    //通过编号进行
    const emailToNumber = {}
    const emailToName = {}
    let count = 0

    for (const account of accounts) {
        const userName = account[0]
        for (let i = 1; i < account.length; i++) {
            const email = account[i]
            if (!emailToNumber[email]) {
                emailToNumber[email] = count++
                    emailToName[email] = userName
            }
        }
    }

    const uf = new UnionFind(count)
    for (const account of accounts) {
        const firstNumber = emailToNumber[account[1]]
        for (let i = 2; i < account.length; i++) {
            const nextNumber = emailToNumber[account[i]]
            uf.union(firstNumber, nextNumber)
        }
    }

    const finalEmailMap = {}
    for (const email of Object.keys(emailToNumber)) {
        const emailNum = emailToNumber[email]
        const index = uf.findRoot(emailNum)
        const account = finalEmailMap[index] || []
        account.push(email)
        finalEmailMap[index] = account
    }

    const res = []
    for (const emails of Object.values(finalEmailMap)) {
        emails.sort()
        const account = [emailToName[emails[0]]]
        account.push(...emails)
        res.push(account)
    }
    return res
};

class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, index) => index)
        this.size = new Array(n).fill(1)
        this.count = n
    }

    getCount() {
        return this.count
    }

    findRoot(node) {
        while (node !== this.parent[node]) {
            //路径优化
            this.parent[node] = this.parent[this.parent[node]]
            node = this.parent[node]
        }
        return node
    }

    union(node1, node2) {
        let root1 = this.findRoot(node1)
        let root2 = this.findRoot(node2)
        if (root1 === root2) return
        if (this.size[root1] > this.size[root2]) {
            this.parent[root2] = root1
            this.size[root1] += this.size[root2]
        } else {
            this.parent[root1] = root2
            this.size[root2] += this.size[root1]
        }
        this.count--
    }
}
// @lc code=end