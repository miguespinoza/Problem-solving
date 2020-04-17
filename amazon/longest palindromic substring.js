/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(ss) {
    if(ss.length < 2) return ss;
    let longestPalindrome = "";
    for(let start = 0; start < ss.length; start++){
        for(let end = start + 1; end <= ss.length; end++){
            if(end - start > longestPalindrome.length){
                if(isPalindrome(ss, start, end)){
                    longestPalindrome = ss.substring(start, end);   
                }    
            }
        }
    }
    return longestPalindrome;
}

let memory = {}
function isPalindrome(s, start, end){
    //"cabac" if "aba" is palindrome  && c === c then "cabac" is palindrome 
    if(memory[s.substring(start+1, end - 1)] != null){
      if(s[start] === s[end-1] && memory[s.substring(start+1, end - 1)]){
          memory[s.substring(start, end)] = true;
          return true;
      } else{
          memory[s.substring(start, end)] = false; 
          return false;
      }
    }
    else{
        let length = end - start;
        let candidate = s.substring(start, end);
        for(let i = 0; i < length / 2; i++){
            if(candidate[i] !== candidate[length -i -1]){
                memory[candidate] = false;
                return false;
            }
        }
        return true;
    }
}

console.log(longestPalindrome("jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx"));