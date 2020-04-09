function maxMiddlePal(s){
    let start = 0;
    let end = s.length ;
    let max = 0;
    for(let i = start; i <= end; i++){
        for(let j = i+1; j <= end; j++){
            if(isPalindrome(s.substring(i, j))){
                if(j -i > max){
                    max = j-i;
                }
            }
        }
    }

    return max;
}

function maxRightPal(s){
    let end = s.length ;
    let max = 1;
    for(let start = s.length - 2; start >=0; start--){
        if(isPalindrome(s.substring(start, end))){
            if(end - start > max){
                max = end-start;
            }
        }
    }
    return max;
}

function maxLeftPal(s){
    let start = 0;
    let max = 0;
    for(let end = 1; end< s.length; end++){
        if(isPalindrome(s.substring(start, end))){
            if(end -start > max){
                max = end-start;
            }
        }
    }
    return max;
}

let memory = {}
function isPalindrome(s){

    let key = s.substring(1,s.length-1);
    if(key.length === 1){
        memory[key] = true;
    }
    if(memory[key] != null && s[0] === s[s.length-1]){
        memory[s] = memory[key] ;
        return memory[s];
    } else {
        let start = 0;
        let end = s.length-1;
        let middle = s.length /2;
        while(start < middle && end >= middle && s[start] === s[end]){
            start ++;
            end--;
        }
        let result = s.length %2 ===1 ? start === end: start-1 ===end;
        memory[s] = result;
        return memory[s]
    }
}


function circularPalindromes(s) {
    /*
     * Write your code here.
     */

    let nOfRotations = s.length ;
    for(let rn = 0; rn < nOfRotations; rn++){
        let maxMiddle = maxMiddlePal(s);
        //let maxLeft = maxLeftPal(s);
        //let maxRight = maxRightPal(s);
        //let max = Math.max(maxMiddle, maxLeft, maxRight);
        console.log(maxMiddle);
        s = s.substring(1) + s[0];
    }
}

//console.log(isPalindrome("aba"));

//console.log(maxMiddlePal("deddeededeee"));

//console.log(maxLeftPal("deddeededeee"));

//console.log(maxRightPal("deddeededeee"));

//console.log("sssssssss");
circularPalindromes("aaaaabbbbaaaa");
"deddeededeee"