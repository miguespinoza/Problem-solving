/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true


 */
let corespondingOpenChars = {
    ")" : "(",
    "}": "{",
    "]": "["
}

let closeChars = [")","}","]"]

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0) return true;
    // special case for empty string
    let stack = []
    // push initial char to stack
    
    // for every character
    for(let i =0; i< s.length; i++){
        // if is close character
        if(closeChars.includes(s[i])){
            if(stack[stack.length - 1] === corespondingOpenChars[s[i]]){
            // stack.peek() must be the coresponding open char
                //  if yes then pop
                stack.pop();
            } else{
                return false;
            }
                // else return false
        } else{
        // else
            // push char to stack
            stack.push(s[i])
        }
    }
    return stack.length === 0;
    // return stack.length === 0
    
};

        