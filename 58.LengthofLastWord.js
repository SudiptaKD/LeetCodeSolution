/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const arr = s.split(' ');
    for (var i = arr.length-1; i>=0; i--) {
        if (arr[i] !== '') return arr[i].length;
    }
};
console.log(lengthOfLastWord("Hello   World   "));


//Trim solution
var lengthOfLastWord2 = function(s) {
return s.trim().split(" ").pop().length;
}