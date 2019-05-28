// Source : https://leetcode.com/problems/friend-circles/
// Author : Huang Yunda
// Date   : 2019-05-28

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  const visited = [];
  let ans = 0;
  const l = M.length;
  for (let i = 0; i < l; i++) {
    if (!visited[i]) {
      dfs(i);
      ans++;
    }
  }
  return ans;

  function dfs(i) {
    for (let j = 0; j < l; j++) {
      if (M[i][j] === 1 && !visited[j]) {
        visited[j] = true;
        dfs(j);
      }
    }
  }
};