// Refactored

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    nums2.splice(n, nums2.length)
    nums1.splice(m, m+n , ...nums2)
    nums1.sort(function(a, b){return a-b});
};


// First Solution
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {

    let indexNum2 = 0;
    let fixedNum2 = []
    for (let i =0 ; i < n ; i++) {
        fixedNum2.push(nums2[i])
    }
    for (let i = m ; i < m+n ; i++) {
            nums1[i] = fixedNum2[indexNum2]
            indexNum2++;
    }
    return nums1.sort(function(a, b){return a-b});
};