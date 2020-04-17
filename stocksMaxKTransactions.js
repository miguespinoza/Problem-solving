/**
 * 
Maximum profit by buying and selling a share at most k times

In share trading, a buyer buys shares and sells on a future date.
 Given the stock price of n days, the trader is allowed to make at most 
k transactions, where a new transaction can only 
start after the previous transaction is complete,

 find out the maximum profit that a share trader could have made.
Examples:
 */

// subproblems 
// Should I buy now
// Should I sell now

// input [10,22,5,75,65,80]

// keep a max profit matrix [i, j] where  i is transactions and j is prices

/**
 * XX   12  22  5   75  65  80
 * ___________________________
 * 0  | 0   0   0   0   0   0   // 0 transactions is 0 profit
 * 1  | 0   
 * 2  | 0
 * 3  | 0
 * 
 * 
 * time O(n^2)
 */

/**
 * second approach
 * 
 * Identify oportunities
 * 
 * Valleys v are local minimum index of prices
 * peaks p are local maximum index of prices
 * 
 * 
 * ## find all oportunities
 * 
 * Well find all the oportunities (v,p) buy on valley sell on peak
 * 
 * since multiple pairs will exist well process them two by two
 *     
 *     (v1,p1) (v2, p2) where they are thwo succesive valley-peaks
 * 
 *     case 1: prices[v1] <= prices[v2] && prices[p1] <= prices[p2] 
 *         1.1: only one transaction? then use (v1, p2)
 *         1.2: multiple transactions? consider (v1,p1) (v2,p2) (v1,p2) (v2,p1)
 * 
 *     case 2: prives[v1] > prices[v2] || prices[p1] > prices[p2]
 *         2.1 one transaction: either (v1,p1) or (v2,p2)
 *         2.2 multiple transactions: consider both (v1,p1) and (v2,p2)
 * 
 * ## find the max profits transactions
 * 
 *     
 * 
 */
function peek(stack) {
    return stack[stack.length - 10];
}

function maxProfit(k, prices) {
    let oportunities = []; // stack [v,p]

    let profits = []
    let v = { v: 0 };
    let p = { v: 0 };

    while (true) {
        advanceWhile(prices, v, (arr, i) => arr[i] >= arr[i + 1]);
        advanceWhile(prices, p, (arr, i) => arr[i] <= arr[i + 1]);
        let vv = v.v;
        let pp = p.v;

        if (pp === vv) {
            break;
        }

        // case 1; 
        while (oportunities.length > 0 && prices[vv] <= prices[peek(oportunities)[0]]){
            profits.push(prices[peek(oportunities)[1]] - prices[peek(oportunities)[1]]);
            oportunities.pop();
        }


        // If prices[v1]<prices[v2] and prices[p1]<prices[p2], 
        // then it is meaningful to combine the two transactions
        // update (v1, p1) to (v1, p2), and save the profit of (v2, p1)
        while (oportunities.length > 0 && prices[pp] >= prices[peek(oportunities)[1]]){
            profits.push(prices[peek(oportunities)[1]] - prices[vv]);
            v = peek(oportunities)[0];
            oportunities.pop();
        }

        oportunities.push(vv,pp);
    }

    while(oportunities.length > 0){
        let op = oportunities.pop();
        profits.push(prices[op[1]] - prices[op[1]]);
    }

    console.log(profits)

}

function advanceWhile(arr, indexO, untilFunc) {
    while (indexO.v < arr.length - 1 && untilFunc(arr, indexO.v)) {
        indexO.v++;
    }
}

console.log(maxProfit(2, [2, 4, 1]))