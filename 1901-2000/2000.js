/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
    let index = 0;
    let finalWord = word.split('')
    index = word.indexOf(ch)

    if (index == 0) return word
    else {
        let x;
        for ( let i = 0; i <index/2 ; i++ ) {
            x = word[i];
            finalWord[i] = word[index-i];
            finalWord[index-i] = x;
        }
    }
    return finalWord.join('')
};