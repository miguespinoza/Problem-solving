function getPermutations(s){
    let res =[];
    function permute(s, fixed = 0){
        if(fixed === s.length){
            res.push([...s]);
        }
    
        for(let i = fixed; i< s.length; i++){
            swap(s,fixed, i)
            permute(s, fixed +1, res);
            swap(s,fixed, i)
        }

    }
    permute(s);
    return res;
}


function swap(s, i, j){
    let t = s[i];
    s[i] = s[j];
    s[j] = t
    return s;
}
let p = getPermutations(["a", "b", "c"])

/**
 * this uses backtracking
 * 
 * the same array instance is used everiwhere, thus savimg memory
 * 
 * this means that we must set the string back to the original state in line 11
 */