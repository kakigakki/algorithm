/*
 * @lc app=leetcode.cn id=1202 lang=typescript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  if(!pairs.length) return s
  const uf:UnionFind = new UnionFind(s.length)
  const map:{
    [propName:string]:number[]
  } = {}
  const sArr = s.split("")
  for (const [x,y] of pairs) {
      uf.union(x,y)
  }

  for (let i = 0; i < s.length; i++) {
    const parentEle:string = uf.find(i)+""
    if(map[parentEle]){
      map[parentEle].push(i)
    }else{
      map[parentEle] = [i]
    }
  }
  for (const key in map) {
    const subArr:number[] = map[key].slice()
    subArr.sort((a,b)=>s[a].charCodeAt(0)-s[b].charCodeAt(0))
    for (let i = 0; i < map[key].length; i++) {
      const index = map[key][i]
      sArr[index] = s[subArr[i]]
    }
  }
  
  return sArr.join("")
};

class UnionFind {
  private count:number
  private parent:number[]
  private size:number[]
  constructor(n:number) {
      this.count = n
      this.parent = Array.from({ length: n }, (_, index) => index)
      this.size = new Array(n).fill(1)
  }

  find(node:number):number {
      while (this.parent[node] !== node) {
          //路径优化，将时间复杂度降到O（1）
          this.parent[node] = this.parent[this.parent[node]]
          node = this.parent[node]
      }
      return node
  }

  connected(node1:number, node2:number):boolean {
      let root1 = this.find(node1)
      let root2 = this.find(node2)
      return root1 === root2
  }

  union(node1:number, node2:number):void {
      let root1 = this.find(node1)
      let root2 = this.find(node2)
      if (root1 === root2) return
          //时间优化，将极端不平衡树尽可能调平衡
      if (this.size[root1] > this.size[root2]) {
          this.parent[root2] = root1
          this.size[root1] += this.size[root2]
      } else {
          this.parent[root1] = root2
          this.size[root2] += this.size[root1]
      }
      this.count--
  }

  getCount():number {
      return this.count
  }
}
// @lc code=end

