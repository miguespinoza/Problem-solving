/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    for(let i = 0; i< grid.length; i++){
        for(let j = 0; j< grid[0].length; j++){
            if(grid[i][j] == 1){
                if(isIsland(grid,i,j)){
                    count++;
                }else{
                    console.log(grid[i][j],i,j)
                    grid[i][j] = -1;
                }
            }
        }
    }
    return count;
};

function isIsland(grid,i,j){
    if(grid[i+1] && Number(grid[i+1][j]) > 0){
        return false;
    }
    if(grid[i-1] && Number(grid[i-1][j])> 0){
        return false;
    }
    if(Number(grid[i][j+1])> 0){
        return false;
    }
    if(Number(grid[i][j-1])> 0){
        return false;
    }
    return true;
}

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))