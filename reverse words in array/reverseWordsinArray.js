/**Given an input string , reverse the string word by word. 

Example:

Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

Note: 

    A word is defined as a sequence of non-space characters.
    The input string does not contain leading or trailing spaces.
    The words are always separated by a single space.

Follow up: Could you do it in-place without allocating extra space?
*/


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    // reverse the words
    // reverse the string
    // since we want to do it in place we must swap
    let i = 0;
    let step = 1;
    let begin = 0;
    let lastSpace = 0;
    let hasFliped= false;
    while(i>=0 && i<s.length){
        if(s[i] === " "){
            step = step * -1;
            lastSpace = i;
        }
        if(i === 0){
            step = 1;
        }

        if(i === s.length-1 && !hasFliped){
            step = -1;
            hasFliped = !hasFliped
        }
        if(begin === i){
            begin = lastSpace +1;
        }
        i+= step;

        if(step === -1){
            swap(s, i, begin);
            begin++;
        }

        
    }
    return s;
};

function swap(a, i,j){
    let t= a[i];
    a[i] = a[j];
    a[j] = t;
}

let s = reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]);
console.log(s.join(""))