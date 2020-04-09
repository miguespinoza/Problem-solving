/**
 * Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

You are given a set of synonyms, such as (big, large) and (eat, consume). Using this set, determine if two sentences with the same number of words are equivalent.

For example, the following two sentences are equivalent:

    "He wants to eat food."
    "He wants to consume food."

Note that the synonyms (a, b) and (a, c) do not necessarily imply (b, c): consider the case of (coach, bus) and (coach, teacher).

Follow-up: what if we can assume that (a, b) and (a, c) do in fact imply (b, c)?

 */

 function synonymsMatch(s1,s2,synonyms){

    s1 = s1.replace(".", "").split(" ");
    s2 = s2.replace(".", "").split(" ");

    let set = new Set();
    for(let syn of synonyms){
        set.add(syn[0]+syn[1]);
        set.add(syn[1]+syn[0]);
    }

    for (let i = 0; i < s1.length; i++) {
        const w1 = s1[i];
        const w2 = s2[i];

        if(w1 !== w2 && !(set.has(w1+w2) || set.has(w2+w1))){
            return false
        }
    }
    return true;
 }

 console.log(synonymsMatch(
    "He wants to eat food.",
    "He wants to consume food.", [["eat", "consume"]])
)