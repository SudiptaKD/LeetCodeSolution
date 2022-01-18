/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
     let numsObj = {}
     let singleNum
     for (let val of nums ) {
         numsObj[val] = ( numsObj[val] || 0 ) + 1
     }
     for (let key in numsObj) {
         if(numsObj[key] !==2)  {
             return singleNum = key
         } 
     }
     return singleNum
};

const x =[1,2,3,1,2,3,4,5,6,4,6]
console.log(singleNumber(x))