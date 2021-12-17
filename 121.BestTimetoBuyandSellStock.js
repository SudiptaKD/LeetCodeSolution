//Not Completed, wont work for time complexity

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let maxProfit = 0;
    let maxPrice = prices.slice()
    maxPrice.sort((a,b)=> a-b);
    console.log(prices, maxPrice)
    for (let i= 0, j = prices.length-1; i <= (prices.length/2)+1 ; i++, j--) {
        if(prices.indexOf(maxPrice[j]) > prices.indexOf(maxPrice[i])) {
            maxProfit = (maxPrice[j]- maxPrice[i] > maxProfit) ? (maxPrice[j]- maxPrice[i]) : maxProfit;
            console.log(prices.indexOf(maxPrice[j]),prices.indexOf(maxPrice[i]),maxPrice[j], maxPrice[i], maxProfit  )
        }
    }
    return maxProfit;
};


console.log(maxProfit([7,1,5,3,6,4]))

//Old Time limit exeeded solution

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
//  var maxProfit = function(prices) {
//     let maxProfit = 0;
//     for (let i= 0; i < prices.length-1 ; i++) {
//         for (let j = i+1; j < prices.length ; j++) {
//             maxProfit = (prices[j]- prices[i] > maxProfit) ? (prices[j]- prices[i]) : maxProfit;
//         }
//     }
//     return maxProfit;
// };