//Could be reactor , look into that later 

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let sArr = []
    let isPalindrome = true
    for (let i= 0; i<s.length ; i++) {
        if(isAlphanumeric(s[i])) {
            sArr.push(s[i])
        }
    }

    for (let i = 0, j = sArr.length-1 ; i<j ; i++, j --) {
        if (sArr[i].toLowerCase() !== sArr[j].toLowerCase()) {
            isPalindrome = false
            break;
        };
    }
    if(sArr.join()=="") isPalindrome = true    
    function isAlphanumeric(str) {
        let code = str.charCodeAt(0);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
        }
        return true;
    }
    return isPalindrome
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))