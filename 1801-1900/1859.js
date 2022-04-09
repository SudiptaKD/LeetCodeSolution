/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let finalSentence = []
    let x = s.split(' ');
    for (let i =0 ; i< x.length ; i ++) {
        let word = x[i];
        let lastIndex = word.length-1
        let finalIndex  = word[lastIndex] ;
        finalSentence[finalIndex-1] = word.slice(0, lastIndex)
    }
    return finalSentence.join(' ')
};