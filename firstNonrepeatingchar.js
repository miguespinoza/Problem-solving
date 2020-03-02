/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // keep track of all the unique characters and indexes and return the one with lower index
    let store = {};
    for(let i = 0; i< s.length; i++){
        if(store[s[i]] == null){
            store[s[i]] = {index: i, repeated: false};
        }else{
            store[s[i]].repeated = true;
        }
    }
    let firstIndex = Object.values(store).filter(v => v.repeated===false).reduce((o, v) => {
        if(o === -1 || v.index < o){
            o = v.index;
        }
        return o;
    }, -1)
    
    return firstIndex
    
};


