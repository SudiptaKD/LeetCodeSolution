/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
    let good_sub = 0 ;
    let sArr = s.split('');
    for (let i = 0 ; i < sArr.length - 2 ; i++ ) {
        if ( sArr[i] !== sArr[i+1] && sArr[i] !== sArr[i+2] && sArr[i+1] !== sArr[i+2]) {
            good_sub++;
        }
    }
    return good_sub
};