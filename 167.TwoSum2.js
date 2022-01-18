/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let returnArr = []
    for( let i =0; i < numbers.length-1; i++) {
        for( let j = i+1; j < numbers.length; j++ ) {
            if(numbers[i] + numbers[j] == target) {
                returnArr[0] = i+1;
                returnArr[1] = j+1;
                break;
            }
            if(numbers[i] + numbers[j] > target) {
                break;
            }
        }
        if(returnArr.length == 2) {
            break;
        }
    }
    return returnArr;
};

//Optimised solution

var twoSum = function(numbers, target) {
    let low = 0
    let high = numbers.length - 1
    while (low < high) {
        let sum = numbers[low] + numbers[high]
        if (sum === target) return [low+1, high+1]
        else if (sum > target) high--
        else low++
    }
}