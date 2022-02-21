/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  for(let i = 0, j = s.length-1 ; i<j ; i++ , j-- ) {
      let x =s[i];
      s[i] = s[j];
      s[j]= x;
  }  
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    function reversing(s,i) {
        if (i >= s.length/2) {
            return;
        }
        let a = s[i];
        s[i] = s[s.length-1-i];
        s[s.length-1-i] = a;
        reversing(s, i+1);
    }
    reversing(s, 0);
   };