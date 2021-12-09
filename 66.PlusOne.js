/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    if(digits.length<15) {
        let num = parseInt(digits.join('')) + 1;
        return num.toString().split('');
    }
    else { 
        if(digits[digits.length-1] !== 9) digits[digits.length-1] = digits[digits.length-1]+1;
        else {
            for (let i = digits.length-1; i >= 0; i-- ) {
                if(digits[i] == 9 ) {
                    digits[i] = 0;
                    if(i==0) digits.unshift(1)
                }
                else {
                    digits[i] = digits[i]+1;
                    break;
                }
            }
        }
    }
    return digits
};
const fruits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9];

console.log(plusOne(fruits))
