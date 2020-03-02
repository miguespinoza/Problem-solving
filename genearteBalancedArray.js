function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    //  generate an array from -N/2 to N/2
    // if N%2 == 0 you ommit the 0
    // otherwise have the 0
    let min = -1 * Math.floor(N/2);
    let max = Math.floor(N/2);
    let shouldHaveZero = N % 2 === 1;
    let array = [];
    
    for(let i=0; i < N; i++){
        if(i < max){
            array.push(min + i);
        }
        if(i>max){
            array.push(i - max);
        }
        if(shouldHaveZero){
            if(i === max){
                array.push(0);
            }
        } else{
            if(i === max){
                max--;
                array.push((max - i) * -1);
            }
        }
        
        
    }
    
    return array;
    
}

console.log(solution(4))