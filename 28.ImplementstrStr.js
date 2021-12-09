/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    let isThere = -1;
    if ( needle === '' ) isThere = 0;
    for( let i = 0; i <= haystack.length-needle.length ; i++ ) {
        if( haystack[i] == needle[0] ) {
            for (let j = 0 ; j < needle.length ; j++ ) {
                if (haystack[i+j] !== needle[j] )  {
                    break;
                }
                else if (j== needle.length-1) {
                    isThere = i;
                }
            }
            if (isThere !== -1) break;
        }
    }
    return isThere;
};
console.log(strStr('hello', 'll'))

//Easy Solution
var strStr2 = function(haystack, needle) {
    if(!haystack && !needle) return 0
    else return haystack.indexOf(needle)
};