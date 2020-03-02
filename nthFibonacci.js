function nthFibonacci(n){
    if(n <= 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    
    return nthFibonacci(n-1) + nthFibonacci(n-2);
}
let startDate = Date.now();

console.log(nthFibonacci(4))
console.log("took: ", (Date.now() - startDate) );

startDate = Date.now();
console.log(nthFibonacciBottomUp(400))
console.log("took: ", startDate - Date.now());


function nthFibonacciBottomUp(n){
    if(n < 0) throw new Error("bad input");
    if(n < 2) return 1;

    // n-1
    let n1 = 1;
    // n-2
    let n2 = 0;
    let fib;
    for(let i =1; i< n-1; i++){
        fib = n1 + n2;
        n2 = n1;
        n1 = fib;
    }
    return fib;
}