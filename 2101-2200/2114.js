/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let maxWord = 0;
    for(let i = 0; i< sentences.length; i++)  {
        let wordArr = sentences[i].split(' ');
        if (wordArr.length > maxWord) maxWord = wordArr.length;
    }
    return maxWord;
};