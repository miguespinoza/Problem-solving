/**
 * Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:

    All inputs will be in lowercase.
    The order of your output does not matter.


 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let store = {}
    strs.forEach(s => {
        let key = getKey(s);
        if(store[key] == null){
            store[key] = [s]
        }else{
            store[key].push(s);
        }
    })
    return Object.values(store)
};

// get a unique key
function getKey(str){
    return str.split("").sort().join("");
}