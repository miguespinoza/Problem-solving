/**
 * given an array of chars, split it using the chars in the delimeters arary
 * 
 * arr = {'a', 'b', 'c', '-', 'd', 'e', '/','a', ':', 'b', 'c','*', 'd', 'e'};
 * delimiters = {'/', '*', ':', '-'}
 * 
 * output:
 * {"abc", "de", "a", "bc", "de"}
 */

 function split(arr, delimiters){
    let res = [];
    let currentPart = 0;

    let isDelimiter = {};
    for(let d of delimiters){
        isDelimiter[d] = true;
    }

    for(let i= 0; i< arr.length; i++){
        let c = arr[i];
        if(isDelimiter[c]){
            currentPart++;
        }else{
            if(res[currentPart]){
                res[currentPart].push(c);
            }else{
                res[currentPart] =[c];
            }
        }
    }

    return res;

 }

 console.log(split(
     ['/', '*', ':', '6', 'd', 'e', '/','a', ':', 'b', 'c','*', 'd', 'e'],
     ['/', '*', ':', '-'])
 )

