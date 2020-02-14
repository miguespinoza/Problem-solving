/**
 * you want to move or a staricase
 * 
 * on each step you can do 1,2 or 3
 * 
 * the starcase has size n
 * 
 * you cannot pass the size n you would fall
 * 
 * print how many ways are to go up the stair
 */

// need to add memoization, each step is identified by its position n and step s
let memory = {}
const solution = (n, pos=0) => {
    if(memory[`${n}${pos}`] != null) return memory[`${n}${pos}`];
    // Type your solution here
    // the decisions form a tree, the tree stops spanding when val >= n
    if(pos === n){
        return 1;
    }
    if(pos > n){
        return 0;
    }
    let sol = solution(n, pos + 1) + solution(n, pos + 2) + solution(n, pos + 3);
    memory[`${n}${pos}`] = sol;
    return sol;
};


console.log(solution(3))
/**
 * 
 */