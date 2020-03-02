/*
 You can assume the input string only contains lowercase letters.

Examples:

    "civic" should return true
    "ivicc" should return true
    "civil" should return false
    "livci" should return false

*/

function hasPalindromePermutation(theString) {

    // Check if any permutation of the input is a palindrome
    
  
    // if the string has even count of unique characters or
    // at most one uneven count of unique characters then its a palindrome
    
    let canHaveOneUneven = theString.length % 2 === 1;
    
    let chars = {};
    for(let i=0; i< theString.length; i++){
      if(chars[theString[i]]){
        chars[theString[i]]++;
      }
      else
        chars[theString[i]]=1;
    }
    
    let unEvenCount =Object.values(chars).map(v => v%2).reduce((o,a) =>o+a,0);
    
    if(canHaveOneUneven){
      unEvenCount--;
    }
    
  
    return unEvenCount<=0;
  }

  
