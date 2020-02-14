
const solution = (n) => {
    n = n.toString();
    // Type your solution here 
    // store the chars of a substring in an object
    let currentSubstring = {}
    let s = 0;
    let e = 0;
    let maxSubstring = 0;
    while(s< n.length && e < n.length){
    //for everi char in string, keep track of substring start s and end e
    //check if char is in current substring
        if(currentSubstring[n[e]] != null){
            // yes, then remove the char at start and move start forward
            
            delete currentSubstring[n[s]];
            s++;
        } else {
             // no, add char to current substring and advance end
           
            currentSubstring[n[e]] = n[e];
            e++;
            maxSubstring = Math.max(maxSubstring, e-s);
        }
    }
    return maxSubstring;
};



console.log(solution(123));