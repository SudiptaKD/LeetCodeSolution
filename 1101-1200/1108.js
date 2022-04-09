/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    const addressArr =[];
    for(let i =0 ; i< address.length ; i++) {
        if(address[i]=== ".") addressArr.push("[.]");
        else addressArr.push(address[i]) 
    }
    return addressArr.join('')
};