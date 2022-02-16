/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    let firstPal = ""
    for ( let x = 0 ; x < words.length ; x ++) {
        let isPal = true;
        for (let i = 0, j = words[x].length-1 ; i < j ; i++ , j--) {
            if ( words[x][i] !==words[x][j] ) {
                isPal = false;
                break;
            }
        }
        if (isPal) {
            firstPal = words[x];
            break;
        }
    }
    return firstPal;
};