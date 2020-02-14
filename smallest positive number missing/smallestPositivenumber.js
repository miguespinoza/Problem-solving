/**
 * 
Find the smallest positive number missing from an unsorted array | Set 1

You are given an unsorted array with both positive and negative elements. 
You have to find the smallest positive number missing from the array in O(n)
 time using constant extra space. You can modify the original array. 


 Input:  {2, 3, 7, 6, 8, -1, -10, 15}
 Output: 1

 Input:  { 2, 3, -7, 6, 8, 1, -10, 15 }
 Output: 4

 Input: {1, 1, 0, -1, -2}
 Output: 2 

 */

function swap(s, i, j){
    let t = s[i];
    s[i] = s[j];
    s[j] = t
    return s;
}

function seggregate(arr){
    let j = 0;
    arr.forEach((e,i) => {
        if(e < 0){
            swap(arr,i,j);
            j++;
        }
    });
    return j;
}

function findMissingPositive(arr){
    // arr.forEach((e, i) => {
    //     if()
    // })
}

seggregate([1,-1,-1,5,3,6,-5])

function distance(p1,p2){
    return Math.sqrt(Math.pow(p1[0] - p2[0],2) + Math.pow(p1[1] - p2[1],2))
}

console.log(distance([-2,2], [1,3]))
