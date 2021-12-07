/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanArr = ['I','V','X','L','C','D','M'];
    const intArr = [1,5,10,50,100,500,1000];
    const sArr = s.toUpperCase().split('')
    let int = 0;
    
    var findIndex = function (p) {
    	for (let j = 0; j < romanArr.length; j++  ) {
      	if (p == romanArr[j]) return j; 
      }
    }
    
    for(let i = sArr.length - 1 ; i >=0 ; i--) {
    
    	if(i > 0) {
      
    		if(findIndex(sArr[i]) > findIndex(sArr[i-1]) ) {
      		int =  int + (intArr[findIndex(sArr[i])] - intArr[findIndex(sArr[i-1])])
        	i--;    
      	}
        
 				else if(findIndex(sArr[i]) == findIndex(sArr[i-1]) ) {
      		int =  int + intArr[findIndex(sArr[i])] + intArr[findIndex(sArr[i-1])]
        	i--;
      	}
        
  			else 	if(findIndex(sArr[i]) < findIndex(sArr[i-1]) ) {
      		int =  int + intArr[findIndex(sArr[i])] + intArr[findIndex(sArr[i-1])]
        	if (findIndex(sArr[i-1])>findIndex(sArr[i-2]) ) {
          	int =  int -intArr[findIndex(sArr[i-2])]
            i--;
          }
          else if (findIndex(sArr[i-1]) ==	findIndex(sArr[i-2]) ) {
          	int =  int +	intArr[findIndex(sArr[i-2])]
            i--;
          }
          i--;
      	}
      }
      
      else	if 	(i==0){
      	int = int + intArr[findIndex(sArr[i])] 
      	return int
      }
      else {
        return int
      }
    }
    return int
};
