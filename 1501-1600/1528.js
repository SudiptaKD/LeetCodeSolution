/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let suffleArr = []
    for (let i = 0  ; i< s.length ; i ++) {
        suffleArr[indices[i]] = s[i]
    }
    return suffleArr.join('');
};