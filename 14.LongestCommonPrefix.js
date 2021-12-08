/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
     let prefix = '';
     for (let j=0; j< strs[0].length; j++) {
        let i = 0 ;
        let lcp = strs[0][j];
        let isBreak = false;
        while (i < strs.length) {
            if(lcp == strs[i][j]) {
                if (i == strs.length-1) {
                    prefix += lcp
                }
                i++
            }
            else {
                isBreak = true;
                break;
            }
        }
        if(isBreak) break;
    }
    return prefix;
};

let strings = ["flower","flow","floight"];
console.log(longestCommonPrefix(strings));