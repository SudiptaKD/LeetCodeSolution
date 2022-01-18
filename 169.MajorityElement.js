/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
     let numsObj ={};
     let majNum;
     for (let val of nums) {
         numsObj[val] = ( numsObj[val] || 0 ) + 1;
     }
     for (let key in numsObj) {
         if(numsObj[key] > (nums.length / 2) ) return majNum = key;
     }
     return majNum;
};