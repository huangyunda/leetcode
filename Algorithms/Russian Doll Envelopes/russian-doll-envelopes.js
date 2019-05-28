// Source : https://leetcode.com/problems/russian-doll-envelopes/
// Author : Huang Yunda
// Date   : 2019-05-28

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  const dp = new Array(envelopes.length);
  let maxL = 0;
  for (let e of envelopes) {
    let left = 0, right = maxL;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (e[1] > dp[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    dp[left] = e[1];
    if (left === maxL) maxL++;
  }
  return maxL;
};