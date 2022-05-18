/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var countSmaller = function(nums) {

    
    let resultArr =[];

    if(nums.length ==1) return [0];

    for (let i =0; i< nums.length; i++) {
        let x = [...nums];
        console.log(x)
        if (i == nums.length-1) {
            resultArr.push(0)
            return resultArr;
        }
        let slicedArr = mergeSort(x.splice(i+1));
        console.log(slicedArr)
        if (slicedArr.length >0 ) {
        let position = searchInsert(slicedArr, nums[i])
        console.log(position)
        resultArr.push(position)
        }
        console.log(resultArr)
    }
    return resultArr;



    function searchInsert(nums, target) {
        let start = 0;
        let end = nums.length - 1;
        let newIndex;
        let middle = Math.floor((start + end) / 2);
        while( nums[middle] !== target && start <= end) {
            if(nums[start] > target)  newIndex = start
            if(nums[end] < target) newIndex = end +1
            if (nums[middle] > target ) end = middle -1;
            else if (nums[middle] < target )  start = middle +1;
            middle = Math.floor((start + end) / 2);
        }
        if (nums[middle] === target) return middle;
        else {
            return newIndex < 0 ? 0 : newIndex; 
        }
    };

    function merge(a,b) {
        let arr = [];
      for(let i =0, j=0 ; i<a.length || j<b.length ; ) {
          if(a[i]<= b[j] || j==b.length) {
          arr.push(a[i])
          i++;
        }
        else if(a[i] >= b[j] || i==a.length) {
          arr.push(b[j])
          j++;
        }
      }
      return arr
    }
    
    function mergeSort(arr) {
      if(arr.length ==1 || arr.length ==1) {
        return arr
      }
      let halfLen = Math.floor((0+ arr.length)/2);
      let firstHalf = arr.slice(0,halfLen);
      let secondHalf = arr.slice(halfLen);
      let sortedArr = merge(mergeSort(firstHalf), mergeSort(secondHalf))
      return sortedArr;
    }
    
};