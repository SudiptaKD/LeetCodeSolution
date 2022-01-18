/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let isDuplicate = false;
    let numsObj = {};
    for ( let val of nums) {
        numsObj[val] = ( numsObj[val] || 0 ) + 1;
    }
    for (let key in numsObj) {
        if(numsObj[key] >= 2) return isDuplicate = true;
    }
    return isDuplicate;
};