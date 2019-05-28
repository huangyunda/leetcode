// Source : https://leetcode.com/problems/permutation-in-string/
// Author : Huang Yunda
// Date   : 2019-05-28

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const l1 = s1.length;
  const l2 = s2.length;
  const s1Arr = getCharCountArr(s1);
  for (let i = 0; i <= l2 - l1; i++) {
    const tem = getCharCountArr(s2.substr(i, l1));
    let flag = true;
    for (let j = 0; j < s1Arr.length; j++) {
      if (s1Arr[j] !== tem[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return flag;
  }
  return false;

  function getCharCountArr(str) {
    const charCountArr = new Array(26).fill(0);
    for (const s of str) {
      const i = s.charCodeAt() - 'a'.charCodeAt();
      charCountArr[i] += 1;
    }
    return charCountArr;
  }
};