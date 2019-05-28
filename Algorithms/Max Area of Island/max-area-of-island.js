// Source : https://leetcode.com/problems/max-area-of-island/
// Author : Huang Yunda
// Date   : 2019-05-28

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const row = grid.length;
  const col = grid[0].length;
  const visited = [];
  for (let i=0;i<row;i++){
      visited[i] = [];
  }
  let maxArea = 0;
  for (let i=0;i<row;i++){
      for (let j=0;j<col;j++) {
          if (grid[i][j] === 1 && !visited[i][j]) {
              maxArea = Math.max(maxArea, dfs(i, j));
          }
      }
  }
  return maxArea;
  function dfs(i, j) {
      if (i<0 || i>=row || j<0 || j>=col) return 0;
      if (grid[i][j] === 0) return 0;
      let area = 0;
      if (grid[i][j] === 1 && !visited[i][j]) {
          visited[i][j] = 1;
          area = 1;
          area += dfs(i-1, j);
          area += dfs(i+1, j);
          area += dfs(i, j-1);
          area += dfs(i, j+1);
      }
      return area;
  }
};