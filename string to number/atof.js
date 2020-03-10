// transform "-124.23242" to number


// algorithm

// 
/**
 * @param {string} str
 * @return {number}
 */
var myAtof = function(str) {
    str = str.trim();
    let num = 0;
    let sign = 1;
    let i = 0;
    
    if( str[0] == "-"){
        sign = -1;
        i = 1;
    }
    
    if( str[0] == "+"){
        i = 1;
    }

    let decN = 0;
    if(/\./.exec(str).length === 1){
        let j = str.length -1;
        while(str[j] != "."){
            decN++;
            j--;
        }
        str = str.replace(".", "");
    }
    
    for(i; i< str.length; i++){
        if(!isNaN(Number(str[i])) && str[i] !== " "){
            num = num * 10 + Number(str[i])           
        } else {
            break;
        }
    }
    let number = sign * num;

    let divisor = Math.pow(10,decN);
    
    return number / divisor;
};

console.log(myAtof(".456.15"))