/**
 * do a in place uniform shuffle
 * INCOMPLETE
 * asume getRandom(floor, ceiling) will give you an uniform probability number
 */

function getRandom(floor, ceiling){
    return Math.floor((Math.random()) * (ceiling - floor) + floor);
}

function shuffle(nums){
    let te = [...nums]
    let res = [];
    for(let i=0; i<nums.length; i++){
        let [n] = te.splice(getRandom(0,te.length-1),1);
        res.push(n)
    }
    return res;
}


function swap(a, i,j){
    let t = a[i];
    a[i] = a[j];
    a[j] = t;
}

console.log(shuffle([1,2,3,4,5,6,7,8,9]))