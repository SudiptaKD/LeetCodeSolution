/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let newIndex;
    let middle = Math.floor((start + end) / 2);
    while( nums[middle] !== target && start <= end) {
        console.log(start, start, middle , end)
        if(nums[start] > target)  newIndex = start;
        if(nums[end] < target) newIndex = end +1
        if (nums[middle] > target ) end = middle -1;
        else if (nums[middle] < target )  start = middle +1;
        middle = Math.floor((start + end) / 2);
        console.log(start, middle , end)
    }
    if (nums[middle] === target) return middle;
    else {
        return newIndex < 0 ? 0 : newIndex; 
    }
};