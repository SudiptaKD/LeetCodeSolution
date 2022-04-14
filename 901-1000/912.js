//insertion Sort 1.6 Sec

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    for(let i = 1; i<nums.length ; i ++ ) {
        let val = nums[i];
        let j = i-1;
        while (j >= 0  && val < nums[j]) {
            nums[j+1]= nums[j];
            j--
        }
        nums[j+1] = val
    }
    return nums
};

// Selection Sort 3.8 Sec

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    let len = nums.length-1
	for(let i = 0; i<= len ; i++){
  	    let index = i;
		for(let j = i+1 ; j<= len  ; j ++) {
    	    if( nums[j] < nums[index] ) {
            index = j
            }
		}
        if(i !== index){
            let m = nums[i];
		    nums[i] = nums[index];
            nums[index] =m
        }
	}
return nums;
};

// Bubble Sort 8.4 sec

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    let len = nums.length-1
	for(let i = len; i >0 ; i--){
		for(let j = 0 ; j <= i-1  ; j ++) {
    	    if( nums[j] > nums[j+1] ) {
            let m = nums[j];
		    nums[j] = nums[j+1];
            nums[j+1] = m
            }
	    }
    }
return nums;
};