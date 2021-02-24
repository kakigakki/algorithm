/*
 * @lc app=leetcode.cn id=832 lang=csharp
 *
 * [832] 翻转图像
 */

// @lc code=start
public class Solution {
    public int[][] FlipAndInvertImage(int[][] A) {
        for (int i = 0; i < A.Length; i++)
        {
            Array.Reverse(A[i]);
            for (int j = 0; j < A[i].Length; j++)
            {   
                A[i][j] ^= 1 ;
            }
        }
        return A;
    }
}
// @lc code=end

