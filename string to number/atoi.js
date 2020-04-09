/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let tri = str.trim();
    let num = 0;
    let sign = 1;
    let i = 0;
    
    if( tri[0] == "-"){
        sign = -1;
        i = 1;
    }
    
    if( tri[0] == "+"){
        i = 1;
    }
    console.log(tri, sign)
    for(i; i< tri.length; i++){
        if(!isNaN(Number(tri[i])) && tri[i] !== " "){
            num = num * 10 + Number(tri[i])           
        } else {
            break;
        }
    }
    let number = sign * num;
    if(number < -2147483648) return -2147483648
    if(number >  2147483647 ) return 2147483647
    
    return number
};


