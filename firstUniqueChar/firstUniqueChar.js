/**
 * given a string s retrun the first unique char index
 * @param {*} s 
 */
const solution = (s) => {
    // Type your solution here
    // store first appeareance in a object
    let map = {}
    let viewed = {}
    // for each character
    for(let i = 0; i< s.length; i++){
        let char = s[i];
        //if character has appeared before
        if(map[char] != null)
            // delete from object
            delete map[char]
        else{
        // else
            // add the index appearence to trhe object
            if(!viewed[char])
                map[char] = i;
            viewed[char] = true;
        }
    }
    // return then min of the objects values
    let first = Math.min(...Object.values(map))
    return first !== Infinity ? first : -1;
};
