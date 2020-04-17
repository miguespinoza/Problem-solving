/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    // identify where the spaces appear save them in spaces[]
    // reverse words
    
    // reverse the full array
    
    let spaces = [-1,];
    for(let i = 0; i < s.length; i++){
        if(s[i] === " "){
            spaces.push(i);
        }
    }
    spaces.push(s.length);
    // spaces = [0,3, 7, 11,s.length-1];
    for(let i = 0; i < spaces.length-1; i++){
        let start = spaces[i]+1;
        let end = spaces[i+1]-1;
        
        let length = end - start;
        for(let j =  0; j < length/2; j++){
            let t = s[j+start];
            s[j+start] = s[length + start -j];
            s[length + start -j] = t;
        }
    }
    console.log(s) 
    for(let j = 0; j < s.length / 2; j++){
            let t = s[j];
            s[j] = s[s.length -j];
            s[s.length -j] = t;
        }

};

reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"])