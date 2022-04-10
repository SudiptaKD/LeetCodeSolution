/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
     let x = nums.slice(0,n)
     let y = nums.slice(n)
    for (let i = 0, j = 0 ; i<n ; i++, j+=2 ) {
        nums[j] = x[i]
        nums[j+1] = y[i]
    }
    return nums;
};