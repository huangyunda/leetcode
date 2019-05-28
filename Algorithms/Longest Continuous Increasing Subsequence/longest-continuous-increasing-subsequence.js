// Source : https://leetcode.com/problems/longest-continuous-increasing-subsequence/
// Author : Huang Yunda
// Date   : 2019-05-28

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) return 0;
    let maxCount = 1;
    let count = 1;
    for (let i = 1;i < nums.length;i++) {
        if (nums[i] > nums[i - 1]) {
            count += 1;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
    }
    return Math.max(maxCount, count);
};