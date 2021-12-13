/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let sum = 0 ;
    if (a == 0) return sum = b;
    else if (b == 0) return sum = a;
    else {
        a = a.split('')
        b = b.split('')
        let binaryArr = []
        let binary = []
        let carry = 0;
        for (let i=a.length-1, j=b.length-1; i>=0 || j>=0 ; i--, j--) {
            if (a[i]==1 && b[j]==1 ) {
                binaryArr.push(0 + carry)
                carry = 1;
            }
            else if ((a[i]==0 && b[j]== undefined ) || (a[i]==undefined && b[j]==0 )) {
                binaryArr.push(0 + carry)
                carry = 0;
            }
            else if (a[i]==0 && b[j]== 0 ) {
                binaryArr.push(0 + carry)
                carry = 0;
            }
            else if ((a[i]==0 && b[j]==1 ) || (a[i]==1 && b[j]==0 )) {
                if (carry) {
                    binaryArr.push(0)
                    carry =1
                }
                else {
                    binaryArr.push(1 + carry)
                    carry = 0;
                }
            }
            else if ((a[i]==undefined && b[j]==1 ) || (a[i]==1 && b[j]==undefined )) {
                if (carry) {
                    binaryArr.push(0)
                    carry =1
                }
                else {
                    binaryArr.push(1 + carry)
                    carry = 0;
                }
            }
        }
        if (carry == 1) binaryArr.push(1)
        for(let i=0; i < binaryArr.length; i++ ) {
            binary[i]= binaryArr[binaryArr.length-1-i]
            }
        return sum = binary.join('')
    }
};


// Doesn't work or big desimal number cause doesnt support in JavaScript

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
//  var addBinary = function(a, b) {
//     let binaryToDecimal = function(x) {
//         x = x.split('');
//         let decimal = 0;
//         for(let i= 0 ; i < x.length ; i++ ) {
//         decimal = decimal + (x[i] * Math.pow (2, (x.length - 1 - i)))
//         }
//         return decimal
//     }
//     let decimalToBinary = function(x) {
//         let binaryArr = []
//         let binary = []
//         if(x == 0) return 0;
//         while (x !==0) {
//         binaryArr.push(x % 2)
//         x = Math.floor(x/2)
//         }
//         for(let i=0; i < binaryArr.length; i++ ) {
//             binary[i]= binaryArr[binaryArr.length-1-i]
//         }
//         return binary.join('')
//     }

//     let sum = 0 ;
//     if (a == 0) return sum = b;
//     else if (b == 0) return sum = a;
//     else {
//         return sum = decimalToBinary(binaryToDecimal(a) + binaryToDecimal(b)) 
//     }
//     return sum;
// };