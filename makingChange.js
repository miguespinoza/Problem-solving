let coins = [186,419,83,408];

function makingChange(target){
    let combinations = [];
    coins = coins.sort((a,b) => b- a );
    function computeCombinations(remainder, combination, coinIndex){
        
        if(remainder < 0){
            return;
        }
        
        if(remainder === 0){
            // combination found
            combinations.push([...combination]);

        }
        // iterate over coins trying to get a new combination
        for(let i = coinIndex; i< coins.length; i++){
            let coin = coins[i];
            combination.push(coin);
            computeCombinations(remainder - coin, combination,i);

            combination.pop();
        }
    }

    computeCombinations(target, [],0)

    return combinations.length;

}

console.log(makingChange( 6249
    ))



function makingChangeBottomUp(target){
    // index is N amout and value is count of ways
    let waysOfDoingNPesos = Array.from({length: target+1}, () => 0); // there is only one way to do 0 pesos "no coins"
    waysOfDoingNPesos[0]  =1;
    for(let coin of coins){
        for(let targetAmount = coin; targetAmount<=target; targetAmount++){
            let remainder = targetAmount - coin;
            waysOfDoingNPesos[targetAmount] += waysOfDoingNPesos[remainder];
        }
    }
    return waysOfDoingNPesos[target];

}

// keep track of all previous ansers to smaller versions of the problem in a big array
console.log(makingChangeBottomUp(5))