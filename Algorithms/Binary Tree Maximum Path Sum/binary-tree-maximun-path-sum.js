// Source : https://leetcode.com/problems/binary-tree-maximum-path-sum/
// Author : Huang Yunda
// Date   : 2019-05-28

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let ans = -Number.MAX_VALUE;
  getMax(root);
  return ans;

  function getMax(root) {
    if (!root) return 0;
    const left = Math.max(0, getMax(root.left));
    const right = Math.max(0, getMax(root.right));
    ans = Math.max(ans, root.val + left + right);
    return Math.max(left, right) + root.val;
  }
};