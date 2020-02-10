/**
 * Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.


Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.


Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

 */

 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // keeep track of lowest price so far
    if(prices.length < 2){
        return 0
    }
    let lowest = prices[0];
    let maxProfit = prices[1] - prices[0];
    for(let i = 1; i < prices.length; i++){
        let currentPrice = prices[i];

        let potentialProfit = currentPrice - lowest;

        if(maxProfit < potentialProfit){
            maxProfit = potentialProfit;
        }

        lowest = Math.min(lowest, currentPrice);
    }

    return maxProfit < 0 ? 0 : maxProfit;
};


var nruteForceMaxProfit = function(prices) {
    profits = [0];
    prices.forEach((p,i) => {
        let temp = []
        for(let j = i+1; j < prices.length; j++ ){
            if(prices[j] - p > 0)
                temp.push(prices[j] - p);
        }
        if(temp.length)
            profits.push(Math.max(...temp));
    })


    return  Math.max(...profits);
};

console.log(maxProfit([7,6,4,3,1]))

/**
 * first try to solve it in paper
 * 
 * greedy approach is good, dont try to force memoization
 * 
 * dinamyc programing is not always memoization
 */